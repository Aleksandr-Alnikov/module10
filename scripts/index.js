import {renderCard, removeGoods, filterGoods, filterSelectGoods} from "./card.js";
import {data, addGoods, editorGoods} from "./card.js";
import {openModalCard} from "./utulities.js";


{
    (async () => {


            await renderCard(data);
            await removeGoods();
            filterGoods(4);
            filterSelectGoods(4);
            openModalCard();
            await addGoods();
            await editorGoods();
    })();
}






