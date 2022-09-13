var t = 0;

var global_width;
var global_height;

var center_x;
var center_y;

function setup() {
  var sketch_size = select("#sketch-holder");
  global_width = sketch_size.width;
  global_height = parseInt(global_width * 0.3);

  console.log(global_width);
  console.log(global_height);

  canvas = createCanvas(global_width, global_height);

  center_x = global_width / 2;
  center_y = global_height / 2;

  canvas.parent("sketch-holder");
}

function draw() {
  background(255);

  let c = color(0);
  fill(c);
  noStroke();

  // circle(center_x, center_y, 20);

  var circle_size = global_width / 70;

  var upper_ellipse_bound = global_width / 10;
  var lower_ellipse_bound = upper_ellipse_bound / 3;

  var shifted_l_r = global_width / 3.5;

  n = 10;

  for (let i = 0; i < n; i++) {
    e1 = ellipse_position(lower_ellipse_bound, upper_ellipse_bound, t % 360);
    ang_rot = radians((i * 360) / n);

    x_rotated = e1.x * cos(ang_rot) - e1.y * sin(ang_rot);
    y_rotated = e1.x * sin(ang_rot) + e1.y * cos(ang_rot);

    circle(
      x_rotated + (center_x - shifted_l_r),
      y_rotated + center_y,
      circle_size
    );
  }

  for (let i = 0; i < n; i++) {
    e1 = ellipse_position(lower_ellipse_bound, upper_ellipse_bound, t % 360);
    ang_rot = radians((i * 360) / n);

    x_rotated = e1.x * -cos(ang_rot) + e1.y * sin(ang_rot);
    y_rotated = e1.x * sin(ang_rot) + e1.y * cos(ang_rot);

    circle(x_rotated + center_x, y_rotated + center_y, circle_size);
  }

  for (let i = 0; i < n; i++) {
    e1 = ellipse_position(lower_ellipse_bound, upper_ellipse_bound, t % 360);
    ang_rot = radians((i * 360) / n);

    x_rotated = e1.x * cos(ang_rot) - e1.y * sin(ang_rot);
    y_rotated = e1.x * sin(ang_rot) + e1.y * cos(ang_rot);

    circle(
      x_rotated + (center_x + shifted_l_r),
      y_rotated + center_y,
      circle_size
    );
  }

  t++;
}

function ellipse_position(a, b, t) {
  var ellipse_x = a * sin(radians(t));
  var ellipse_y = b * cos(radians(t));

  return { x: ellipse_x, y: ellipse_y };
}
