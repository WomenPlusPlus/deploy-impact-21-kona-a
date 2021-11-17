const getLogo = (image) => {

    switch (image) {
        case "Liane":
            return require('../../assets/logos')
            break;
        case "Association":
            return require("2.png")
            break;
            
        default:
            return require("3.png");
            break;
    }
}

export default getLogo;
