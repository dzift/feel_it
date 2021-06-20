

window.addEventListener('DOMContentLoaded', event => {

  
    

    var $card1 = document.getElementById("feelCard_1");
    var $card2 = document.getElementById("feelCard_2");
    var $card3 = document.getElementById("feelCard_3");
    var a = randomInteger(1, 32)
    
    do {
        var b = randomInteger(1, 32)
        var c = randomInteger(1, 32)
        console.log(a,b,c)
      } while (b == a || c == b);
    var sonya = `
    　　　　　　　　　　_,.. -──- ､,
    　　　　　　　　,　'" 　 　　　 　　 'ヽ.
    　　　　　　 ／/¨7__　　/ 　 　 i　 _厂廴
    　　　　　 /￣( ノ__/　/{　　　　} ｢　（_冫}
    　　　　／￣l＿// 　/-|　 ,!　 ﾑ ￣|＿｢ ＼＿_
    　　. イ　 　 ,　 /!_∠_　|　/　/_⊥_,ﾉ ハ　 　イ
    　　　/ ／ / 　〃ん心 ﾚ'|／　ｆ,心 Y　i ＼_＿＞　
    　 ∠イ 　/　 　ﾄ弋_ツ　　 　 弋_ﾂ i　 |　 | ＼
    　 _／ _ノ|　,i　⊂⊃　　　'　　　⊂⊃ ./　 !､＿ン
    　　￣　　∨|　,小、　　' ‐ ' 　　 /|／|　/
    　 　 　 　 　 Y　|ﾍ＞ 、 ＿ ,.　イﾚ|　 ﾚ'
    　　　　　　 r'.| 　|;;;入ﾞ亠―亠' );;;;;! 　|､
    　　　　　 ,ノ:,:|.　!|く　__￣￣￣__У　ﾉ|:,:,ヽ
    　　　　　(:.:.:.:ﾑ人!ﾍ　 　' ´ 　　 厂|ノ:.:.:丿 `    
    
      console.log(sonya)

    var html1 = `<!-- Project details-->
    <h3 class="text-uppercase">Мое состояние сейчас</h3>
    <p class="item-intro text-muted">Какое у меня сейчас состояние?</p>
    <img class="img-fluid d-block mx-auto" src="assets/img/card/card/1 (${a}).png" alt="..." />
    <p><strong>Вспомогательные вопросы для работы с картой:</strong></p>
    <p> Что я чувствую, глядя на карту? Что на карте привлекло мое внимание?
        Почему? Какие эмоции у меня возникают?
        В каких ситуациях, которые происходили ранее были похожие эмоции?
        Как чувствует себя персонаж на картинке? Что персонаж (или персонажи) будет делать
        дальше?
        Как я к этому отношусь? Вижу ли я на картинке себя?
        В какой роли я здесь выступаю? Что я не хочу видеть? Почему?
        Как то, что изображено на карте, говорит мне о моем запросе? </p>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
        type="button">
        <i class="fas fa-times me-1"></i>
        ЗАКРЫТЬ
    </button>`

        var html2 = `<!-- Project details-->
        <h3 class="text-uppercase">Желаемое состояние</h3>
        <p class="item-intro text-muted">Какого состояния мне бы хотелось достичь?</p>
        <img class="img-fluid d-block mx-auto" src="assets/img/card/card/1 (${b}).png" alt="..." />
        <p><strong>Вспомогательные вопросы для работы с картой:</strong></p>
        <p> Что я чувствую, глядя на карту? Что на карте привлекло мое внимание?
            Почему? Какие эмоции у меня возникают?
            В каких ситуациях, которые происходили ранее были похожие эмоции?
            Как чувствует себя персонаж на картинке? Что персонаж (или персонажи) будет делать
            дальше?
            Как я к этому отношусь? Вижу ли я на картинке себя?
            В какой роли я здесь выступаю? Что я не хочу видеть? Почему?
            Как то, что изображено на карте, говорит мне о моем запросе? </p>
        <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
            type="button">
            <i class="fas fa-times me-1"></i>
            ЗАКРЫТЬ
        </button>`



    var html3 = ` <!-- Project details-->
    <h3 class="text-uppercase">Что мне поможет</h3>
    <p class="item-intro text-muted">Что мне поможет достичь желаемого состояния?</p>
    <img class="img-fluid d-block mx-auto" src="assets/img/card/card/1 (${c}).png" alt="..." />
    <p><strong>Вспомогательные вопросы для работы с картой:</strong></p>
    <p> Что я чувствую, глядя на карту? Что на карте привлекло мое внимание?
        Почему? Какие эмоции у меня возникают?
        В каких ситуациях, которые происходили ранее были похожие эмоции?
        Как чувствует себя персонаж на картинке? Что персонаж (или персонажи) будет делать
        дальше?
        Как я к этому отношусь? Вижу ли я на картинке себя?
        В какой роли я здесь выступаю? Что я не хочу видеть? Почему?
        Как то, что изображено на карте, говорит мне о моем запросе? </p>
    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
        type="button">
        <i class="fas fa-times me-1"></i>
        ЗАКРЫТЬ
    </button>`
    $card1.insertAdjacentHTML("beforeBegin", html1);
    $card2.insertAdjacentHTML("beforeBegin", html2);
    $card3.insertAdjacentHTML("beforeBegin", html3);
    
});



    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      