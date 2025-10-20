// Cho phép import file CSS module
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// (Tuỳ chọn) Cho phép import SCSS module nếu sau này cần
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
