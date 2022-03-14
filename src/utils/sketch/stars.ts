export const startSketch = (p: any) => {
  const particles = [];
  const num = 200;
  const noiseScale = 0.01;

  p.setup = () => {
    //p.createCanvas(500, 500);

    for (let i = 0; i < num; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
    p.stroke(255);
  };

  p.draw = () => {
    p.background(0);

    for (let i = 0; i < num; i++) {
      const pt = particles[i];
      p.point(pt.x, pt.y);
      let n = p.noise(pt.x * noiseScale, pt.y * noiseScale);
      let a = p.TAU * n;
      p.x += p.cos(a);
      p.y += p.sin(a);
      if (!onScreen(p.x, p.y)) {
        p.x = p.random(p.width);
        p.y = p.random(p.height);
      }
    }
  };

  const onScreen = (x: number, y: number) => {
    return x >= 0 && x <= p.width && y >= 0 && y <= p.height;
  };
};

export const _sketch = (p: any) => {
  p.setup = () => {
    //p.createCanvas(200, 200);
    p.strokeWeight(7);
    p.background(0);
  };

  const harom = (
    ax: any,
    ay: any,
    bx: any,
    by: any,
    level: any,
    ratio: any
  ) => {
    if (level <= 0) {
      return;
    }

    const vx = bx - ax;
    const vy = by - ay;
    const nx = p.cos(p.PI / 3) * vx - p.sin(p.PI / 3) * vy;
    const ny = p.sin(p.PI / 3) * vx + p.cos(p.PI / 3) * vy;
    const cx = ax + nx;
    const cy = ay + ny;
    p.line(ax, ay, bx, by);
    p.line(ax, ay, cx, cy);
    p.line(cx, cy, bx, by);

    harom(
      ax * ratio + cx * (1 - ratio),
      ay * ratio + cy * (1 - ratio),
      ax * (1 - ratio) + bx * ratio,
      ay * (1 - ratio) + by * ratio,
      level - 1,
      ratio
    );
  };

  p.draw = () => {
    p.background(0);
    harom(
      p.width - 142,
      p.height - 142,
      142,
      p.height - 142,
      6,
      (p.sin((0.0005 * Date.now()) % (2 * p.PI)) + 1) / 2
    );
  };
};
