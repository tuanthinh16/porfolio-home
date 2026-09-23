type Point = { x: number; y: number };
type Curve = [Point, Point, Point, Point];

function interpolate(curve: Curve, progress: number): Point {
  const remaining = 1 - progress;
  const weights = [remaining ** 3, 3 * remaining ** 2 * progress, 3 * remaining * progress ** 2, progress ** 3];
  return curve.reduce((point, control, index) => ({
    x: point.x + control.x * weights[index],
    y: point.y + control.y * weights[index],
  }), { x: 0, y: 0 });
}

export function createRoadmap(count: number) {
  const viewportWidth = 1200;
  const height = 560;
  const stride = 692;
  const landmarks = Array.from({ length: count }, (_, index) => ({ x: 216 + index * stride, y: index % 2 === 0 ? 398 : 220 }));
  const width = (count - 1) * stride + viewportWidth;
  const base: Curve[] = [
    [{ x: 216, y: 398 }, { x: 349, y: 326 }, { x: 439, y: 509 }, { x: 565, y: 380 }],
    [{ x: 565, y: 380 }, { x: 691, y: 251 }, { x: 775, y: 148 }, { x: 908, y: 220 }],
  ];
  const legs = Array.from({ length: count - 1 }, (_, index) => base.map((curve) => curve.map((point) => ({
    x: point.x + index * stride,
    y: index % 2 === 0 ? point.y : 618 - point.y,
  })) as Curve));
  const curves = legs.flat().map((curve) => `C${curve.slice(1).map((point) => `${point.x} ${point.y}`).join(" ")}`).join(" ");
  const last = landmarks[count - 1];
  const path = `M-105 459 C58 472 119 450 216 398 ${curves} C${last.x + 150} ${last.y + 80} ${width - 240} ${last.y - 50} ${width + 30} ${last.y + 40}`;

  const position = (leg: number, progress: number) => {
    if (leg >= legs.length) return last;
    const bounded = Math.max(0, Math.min(1, progress));
    return interpolate(legs[leg][bounded <= .5 ? 0 : 1], bounded <= .5 ? bounded * 2 : (bounded - .5) * 2);
  };
  const tangent = (leg: number, progress: number) => {
    const boundedLeg = Math.min(leg, legs.length - 1);
    const bounded = leg >= legs.length ? 1 : Math.max(0, Math.min(1, progress));
    const curve = legs[boundedLeg][bounded <= .5 ? 0 : 1];
    const fraction = bounded <= .5 ? bounded * 2 : (bounded - .5) * 2;
    const derivative = (axis: "x" | "y") => 3 * (1 - fraction) ** 2 * (curve[1][axis] - curve[0][axis]) +
      6 * (1 - fraction) * fraction * (curve[2][axis] - curve[1][axis]) +
      3 * fraction ** 2 * (curve[3][axis] - curve[2][axis]);
    return { x: derivative("x"), y: derivative("y") };
  };
  return { landmarks, width, height, viewportWidth, path, position, tangent };
}

export const cyclistDimensions = { width: 180, height: 145, ground: 132 };

export function cyclistPose(angle: number) {
  const hip = { x: 77, y: 56 };
  const pedal = (phase: number) => ({ x: 87 + Math.cos(phase) * 12, y: 98 + Math.sin(phase) * 12 });
  const leg = (foot: Point) => {
    const distance = Math.hypot(foot.x - hip.x, foot.y - hip.y);
    const bend = Math.acos(Math.max(-1, Math.min(1, (32 ** 2 + distance ** 2 - 34 ** 2) / (2 * 32 * distance))));
    const direction = Math.atan2(foot.y - hip.y, foot.x - hip.x) - bend;
    const knee = { x: hip.x + Math.cos(direction) * 32, y: hip.y + Math.sin(direction) * 32 };
    return `M${hip.x} ${hip.y} L${knee.x} ${knee.y} L${foot.x} ${foot.y}`;
  };
  const front = pedal(angle);
  const back = pedal(angle + Math.PI);
  return { front, back, frontLeg: leg(front), backLeg: leg(back), crank: `M${front.x} ${front.y} L87 98 L${back.x} ${back.y}` };
}

export function cyclistUpperPose(lean: number) {
  const rotation = Math.max(0, Math.min(1, lean)) * 20;
  const radians = rotation * Math.PI / 180;
  const shoulder = {
    x: 77 + 22 * Math.cos(radians) + 19 * Math.sin(radians),
    y: 56 + 22 * Math.sin(radians) - 19 * Math.cos(radians),
  };
  const hand = { x: 131, y: 48 };
  const distance = Math.hypot(hand.x - shoulder.x, hand.y - shoulder.y);
  const bend = Math.acos(Math.max(-1, Math.min(1, (22 ** 2 + distance ** 2 - 23 ** 2) / (44 * distance))));
  const direction = Math.atan2(hand.y - shoulder.y, hand.x - shoulder.x) + bend;
  const elbow = { x: shoulder.x + 22 * Math.cos(direction), y: shoulder.y + 22 * Math.sin(direction) };
  return {
    transform: `rotate(${rotation} 77 56)`,
    arm: `M${shoulder.x} ${shoulder.y} L${elbow.x} ${elbow.y} L${hand.x} ${hand.y}`,
    sleeve: `M${shoulder.x} ${shoulder.y} l${8 * Math.cos(direction)} ${8 * Math.sin(direction)}`,
  };
}
