"use strict"

{
    const word = document.getElementById('word');


    // タイピングさせる文字を格納する
    const names = ["apple", "banana", "camera", "dog", "egg", "five", "glass"];

    // 配列の中のひとつだけの文字を格納する変数:name
    let name

    // 文字単体の配列が何文字目かを表す変数:numbers
    let bango = 0;
    
    let loc = false;
    
    let allTimer;

    // Typing関数:文字をランダムに生成しています
    function Typing(){
        // ランダムに配列内の文字を摘出し出力します。
        const number = Math.floor(Math.random()*names.length);
        // 重複しないやり方
        name = names.splice(number,1)[0];
        word.textContent=name;
        bango = 0;
    }


    
    // 一番最初:クリックした際に文字が変わる操作
    document.addEventListener('click', ()=>{

        if(loc === true){
            return;
        }

        loc = true;
        allTimer = Date.now();
        Typing();
    });

    // 文字を打つとその文字が出力されます
    document.addEventListener('keydown', e =>{

        // 打ったキーと打つべき文字が一致しない時
        if(e.key !== name[bango]){
            return;
        }

        bango++;
        word.textContent = '_'.repeat(bango) + name.substring(bango);

        // 文字を全て打ち終えたら
        if(bango === name.length){

            // 文字も打つ文字もなくなったときの処理
            if(names.length === 0){
                word.textContent = "終了";
                const finish = ((Date.now() - allTimer) / 1000).toFixed(2);
                const timer = document.getElementById('timer');
                timer.textContent= `${finish} 秒でした!`;
                return;
            }

            Typing();
        }
    });


}