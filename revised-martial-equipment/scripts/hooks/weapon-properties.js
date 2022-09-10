export const WEAPON_PROPERTIES = {
    label:"RME",
    weapons:[
        {
            label:"battleaxe", //Demo Weapon
            type:"axes",
            untrained:{
                properties:{
                    "aff":false, "amm":false, "awk":true, "bar":false, "bal":false, "bra":false, "con":false, "def":false, "dis":false, "dbl":false, "ent":false, "fir":false, "fin":false, "hip":false, "hvy":false, "kee":false, "lgt":false, "lng":false, "mel":true, "mgc":false, "nim":false, "one":false, "pen":false, "pun":false, "rng":false, "rea":false, "rel":false, "sta":false, "sun":false, "thr":false, "trp":false, "two":true, "ver":false
                },
                range:{ value:5, long:""},
                damage: "d8+@mod",
                versatile: ""
            },
            basic:{
                properties:{
                    "aff":false, "amm":false, "awk":false, "bar":false, "bal":false, "bra":false, "con":false, "def":false, "dis":false, "dbl":false, "ent":false, "fir":false, "fin":false, "hip":false, "hvy":false, "kee":false, "lgt":false, "lng":false, "mel":true, "mgc":false, "nim":false, "one":true, "pen":false, "pun":false, "rng":false, "rea":false, "rel":false, "sta":false, "sun":false, "thr":false, "trp":true, "two":false, "ver":true
                },
                range:{ value:5, long:""},
                damage: "d8+@mod",
                versatile: "d10+@mod"
            },
            master:{
                properties:{
                    "aff":false, "amm":false, "awk":false, "bar":false, "bal":false, "bra":false, "con":false, "def":false, "dis":false, "dbl":false, "ent":false, "fir":false, "fin":false, "hip":false, "hvy":false, "kee":false, "lgt":false, "lng":false, "mel":true, "mgc":false, "nim":false, "one":true, "pen":false, "pun":false, "rng":false, "rea":false, "rel":false, "sta":false, "sun":false, "thr":false, "trp":true, "two":false, "ver":true
                },
                range:{value:5, long:""},
                damage: "d10+@mod",
                versatile: "d12+@mod"
            },
            master_perk:""
        },
        {
            label:"greataxe",
            type:"axes",
            untrained:{
                properties:{
                    "aff":false, "amm":false, "awk":true, "bar":false, "bal":false, "bra":true, "con":false, "def":false, "dis":false, "dbl":false, "ent":false, "fir":false, "fin":false, "hip":false, "hvy":true, "kee":false, "lgt":false, "lng":false, "mel":true, "mgc":false, "nim":false, "one":false, "pen":false, "pun":false, "rng":false, "rea":false, "rel":false, "sta":false, "sun":false, "thr":false, "trp":false, "two":true, "ver":false
                },
                range:{ value:5, long:""},
                damage: "d10+@mod",
                versatile: ""
            },
            basic:{
                properties:{
                    "aff":false, "amm":false, "awk":false, "bar":false, "bal":false, "bra":true, "con":false, "def":false, "dis":true, "dbl":false, "ent":false, "fir":false, "fin":false, "hip":false, "hvy":true, "kee":false, "lgt":false, "lng":false, "mel":true, "mgc":false, "nim":false, "one":false, "pen":false, "pun":false, "rng":false, "rea":false, "rel":false, "sta":false, "sun":false, "thr":false, "trp":true, "two":true, "ver":false
                },
                range:{ value:5, long:""},
                damage: "d12+@mod",
                versatile: ""
            },
            master:{
                properties:{
                    "aff":false, "amm":false, "awk":false, "bar":false, "bal":false, "bra":true, "con":false, "def":false, "dis":true, "dbl":false, "ent":false, "fir":false, "fin":false, "hip":false, "hvy":true, "kee":false, "lgt":false, "lng":false, "mel":true, "mgc":false, "nim":false, "one":false, "pen":false, "pun":false, "rng":false, "rea":false, "rel":false, "sta":false, "sun":false, "thr":false, "trp":true, "two":true, "ver":false
                },
                range:{value:5, long:""},
                damage: "2d8+@mod",
                versatile: ""
            },
            master_perk:"When you score a mighty blow you can roll all damage and any attachers twice and take the better result."
        }
    ]
}
