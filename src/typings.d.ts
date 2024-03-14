declare module "*.module.css" {
    interface IclassNames {
    [className: string]: string
    }
    const classNames: IclassNames;
    export = classNames;
    }