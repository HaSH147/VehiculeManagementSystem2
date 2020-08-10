import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
    },
});
export var Cards;
(function (Cards) {
    Cards[Cards["Card1"] = 0] = "Card1";
    Cards[Cards["Card2"] = 1] = "Card2";
    Cards[Cards["Card3"] = 2] = "Card3";
    Cards[Cards["Card4"] = 3] = "Card4";
    Cards[Cards["Card5"] = 4] = "Card5";
    Cards[Cards["Card6"] = 5] = "Card6";
})(Cards || (Cards = {}));
export default ({ type }) => {
    let source;
    switch (type) {
        case Cards.Card1:
            source = require("../assets/card1.png");
            break;
        case Cards.Card2:
            source = require("../assets/card2.png");
            break;
        case Cards.Card3:
            source = require("../assets/card3.png");
            break;
        case Cards.Card4:
            source = require("../assets/card4.png");
            break;
        case Cards.Card5:
            source = require("../assets/card5.png");
            break;
        case Cards.Card6:
            source = require("../assets/card6.png");
            break;
        default:
            throw Error("Invalid card style");
    }
    return style;
    {
        styles.card;
    }
    {
        {
            source;
        }
    }
    />;;
};
