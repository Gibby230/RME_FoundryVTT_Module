import { MODULE_TITLE_SHORT } from "../const.mjs";

export function patchWeapons(){
    console.log(`${MODULE_TITLE_SHORT} | Patching Weapons and Armor`);
     _patchWeapons();


}


function _patchWeapons(){
    // Override DND5E weapon properties with RME Weapon Properties
    CONFIG.DND5E.weaponProperties = {
        unt: game.i18n.localize("RME.WeaponPropertiesUnt"),
        bsc: game.i18n.localize("RME.WeaponPropertiesBsc"),
        mst: game.i18n.localize("RME.WeaponPropertiesMst"),
        aff: game.i18n.localize('RME.WeaponPropertiesAff'),
        amm: game.i18n.localize("RME.WeaponPropertiesAmm"),
        awk: game.i18n.localize("RME.WeaponPropertiesAwk"),
        bar: game.i18n.localize("RME.WeaponPropertiesBar"),
        bal: game.i18n.localize("RME.WeaponPropertiesBal"),
        bra: game.i18n.localize("RME.WeaponPropertiesBra"),
        con: game.i18n.localize("RME.WeaponPropertiesCon"),
        def: game.i18n.localize("RME.WeaponPropertiesDef"),
        dis: game.i18n.localize("RME.WeaponPropertiesDis"),
        dbl: game.i18n.localize("RME.WeaponPropertiesDbl"),
        ent: game.i18n.localize("RME.WeaponPropertiesEnt"),
        fin: game.i18n.localize("RME.WeaponPropertiesFin"),
        fir: game.i18n.localize("RME.WeaponPropertiesFir"),
        hvy: game.i18n.localize("RME.WeaponPropertiesHvy"),
        hip: game.i18n.localize("RME.WeaponPropertiesHip"),
        kee: game.i18n.localize("RME.WeaponPropertiesKee"),
        knb: game.i18n.localize("RME.WeaponPropertiesKnb"),
        lgt: game.i18n.localize("RME.WeaponPropertiesLgt"),
        lng: game.i18n.localize("RME.WeaponPropertiesLng"),
        nat: game.i18n.localize("RME.WeaponPropertiesNat"),
        mel: game.i18n.localize("RME.WeaponPropertiesMel"),
        mgc: game.i18n.localize("RME.WeaponPropertiesMgc"),
        nim: game.i18n.localize("RME.WeaponPropertiesNim"),
        one: game.i18n.localize("RME.WeaponPropertiesOne"),
        pen: game.i18n.localize("RME.WeaponPropertiesPen"),
        pun: game.i18n.localize("RME.WeaponPropertiesPun"),
        rng: game.i18n.localize("RME.WeaponPropertiesRng"),
        rea: game.i18n.localize("RME.WeaponPropertiesRea"),
        rel: game.i18n.localize("RME.WeaponPropertiesRel"),
        sta: game.i18n.localize("RME.WeaponPropertiesSta"),
        sun: game.i18n.localize("RME.WeaponPropertiesSun"),
        thr: game.i18n.localize("RME.WeaponPropertiesThr"),
        trp: game.i18n.localize("RME.WeaponPropertiesTrp"),
        two: game.i18n.localize("RME.WeaponPropertiesTwo"),
        ver: game.i18n.localize("RME.WeaponPropertiesVer")
    };

    // Override basic DND5E martial and simple weapon proficiencies with RME weapon groups
    CONFIG.DND5E.weaponProficiencies = {
        amb: game.i18n.localize("RME.WeaponAmbushProficiency"),
        axe: game.i18n.localize("RME.WeaponAxesProficiency"),
        bld: game.i18n.localize("RME.WeaponBludgeonsProficiency"),
        bow: game.i18n.localize("RME.WeaponBows&SlingsProficiency"),
        cmb: game.i18n.localize("RME.WeaponCombateBladesProficiency"),
        xbo: game.i18n.localize("RME.WeaponCrosbowsProficiency"),
        dul: game.i18n.localize("RME.WeaponDuelingBladesProficiency"),
        gun: game.i18n.localize("RME.WeaponFirearmsProficiency"),
        fla: game.i18n.localize("RME.WeaponFlails&WhipsProficiency"),
        hmr: game.i18n.localize("RME.WeaponHammers&PicksProficiency"),
        pol: game.i18n.localize("RME.WeaponPolearmsProficiency"),
        spr: game.i18n.localize("RME.WeaponSpearsProficiency"),
        thr: game.i18n.localize("RME.WeaponThrowingWeaponsProficiency"),
        nat: game.i18n.localize("RME.WeaponNaturalProficiency"),
    }

    /**
     * A mapping between `DND5E.weaponTypes` and `DND5E.weaponProficiencies` that
     * is used to determine if character has proficiency when adding an item.
     * @enum {(boolean|string)}
     */
    CONFIG.DND5E.weaponProficienciesMap = {
        natural:true,
        ambush: "amb",
        axes: "axe",
        bludgeons: "bld",
        bows: "bow",
        combat: "cmb",
        xbows: "xbo",
        dueling: "dul",
        firearms: "gun",
        flails: "fla",
        hammer: "hmr",
        polearms: "pol",
        spears: "spr",
        throwing: "thr",
        naturalw: "nat"
    };

    // Override DND5E weapon types with RME Weapon Types
    CONFIG.DND5E.weaponTypes = {
        // simpleM: "DND5E.WeaponSimpleM",
        // simpleR: "DND5E.WeaponSimpleR",
        // martialM: "DND5E.WeaponMartialM",
        // martialR: "DND5E.WeaponMartialR",
        natural: game.i18n.localize("RME.WeaponNatural"),
        improv: game.i18n.localize("RME.WeaponImprov"),
        siege: game.i18n.localize("RME.WeaponSiege"),
        ambush: game.i18n.localize("RME.WeaponAmbushProficiency"),
        axes: game.i18n.localize("RME.WeaponAxesProficiency"),
        bludgeons: game.i18n.localize("RME.WeaponBludgeonsProficiency"),
        bows: game.i18n.localize("RME.WeaponBows&SlingsProficiency"),
        combat: game.i18n.localize("RME.WeaponCombateBladesProficiency"),
        xbows: game.i18n.localize("RME.WeaponCrosbowsProficiency"),
        dueling: game.i18n.localize("RME.WeaponDuelingBladesProficiency"),
        firearms: game.i18n.localize("RME.WeaponFirearmsProficiency"),
        flails: game.i18n.localize("RME.WeaponFlails&WhipsProficiency"),
        hammer: game.i18n.localize("RME.WeaponHammers&PicksProficiency"),
        polearms: game.i18n.localize("RME.WeaponPolearmsProficiency"),
        spears: game.i18n.localize("RME.WeaponSpearsProficiency"),
        throwing: game.i18n.localize("RME.WeaponThrowingWeaponsProficiency"),
        naturalw: game.i18n.localize("RME.WeaponNaturalProficiency"),
    };



    CONFIG.DND5E.weaponIds = {
        // Ambush Weapons
        whipdagger: "revised-martial-equipment.items.GXT66Kk2kYGGpqXv",
        punchdagger: "revised-martial-equipment.items.E1vP7uXZvUbgIZx3",
        gauntlet: "revised-martial-equipment.items.jOTwOhcaatH6ADai",
        hiddenblade: "revised-martial-equipment.items.BTO7Nd1OQpP6dRGI",
        interceptor: "revised-martial-equipment.items.dk2yYXLupFl8lIqA",
        katar: "revised-martial-equipment.items.HJMShbLUqn2UCjOC",
        knuckleaxe: "revised-martial-equipment.items.m9gmMMC6Fr8mW9Wh",
        sidebaton: "revised-martial-equipment.items.WkvkQgasb1wagK91",
        unarmedstrike: "revised-martial-equipment.items.4v5eaRWEZXBeFKn7",

        //Axes
        battleaxe: "revised-martial-equipment.items.FEltykw0yBhvkmkQ",
        greataxe: "revised-martial-equipment.items.YefRkvVoPULRGEZL",
        halberd: "revised-martial-equipment.items.qZBqWEMtNpQgJ8pj",
        handaxe: "revised-martial-equipment.items.9tlrt9msqoSZmBFM",
        hooksword: "revised-martial-equipment.items.JlySjaJMZ7uttLTz",
        khopesh: "revised-martial-equipment.items.eW7zahx0gEIKwMwA",
        poleaxe: "revised-martial-equipment.items.WmxQNoOBcDqrmflI",
        tomahawk: "revised-martial-equipment.items.GAMlHkl8stLroyv2",

        //Bludgeons
        heavyclub: "revised-martial-equipment.items.SJ3Y7PFkM8HTwhgt",
        lightclub: "revised-martial-equipment.items.yipB0btwGrDoEaDW",
        greatclub: "revised-martial-equipment.items.qun1Z6o8ESEsvNz9",
        barmace: "revised-martial-equipment.items.Gxos7NgIYo3dXZM6",
        flangedmace: "revised-martial-equipment.items.DpjgADPcPn41DfCc",
        mallet: "revised-martial-equipment.items.v7XpKVZewAmd0jSj",
        morningstar: "revised-martial-equipment.items.2WutpBXeNTIhCNan",
        quarterstaff: "revised-martial-equipment.items.1xpiv6ogCYXYlCtY",
        bostaff: "revised-martial-equipment.items.n9eK5OKkB5n5ura5",

        //Bows and Slings
        bladedbow: "revised-martial-equipment.items.nWxbQvIjpqKuhvFY",
        compound: "revised-martial-equipment.items.k41xWx3FXNP1UQSg",
        greatbow: "revised-martial-equipment.items.bLVzGVK3GPJic7kF",
        longbow: "revised-martial-equipment.items.7sMlB8TcfwiFMFHV",
        recurve: "revised-martial-equipment.items.8hxKZujggekoXaUq",
        shortbow: "revised-martial-equipment.items.PxfU43I2namfQPZn",
        sling: "revised-martial-equipment.items.OyF4FF1EcKkFeOBX",
        wristshot: "revised-martial-equipment.items.S7eEPh3kf9bB4GwH",

        //Combat Blades
        broadsword: "revised-martial-equipment.items.l498z6Ppv4qY32Rr",
        falchion: "revised-martial-equipment.items.2yxxAyRVyU3lwb90",
        greatsword: "revised-martial-equipment.items.aAHFSopaEgEtfgY8",
        katana: "revised-martial-equipment.items.4LhcPfOOpHVgDPXk",
        longsword: "revised-martial-equipment.items.LkdrUetoApboTVyB",
        montante: "revised-martial-equipment.items.eHkGf6qhc1sHRPMa",
        odachi: "revised-martial-equipment.items.6KQ1hE6MUxlDabsq",
        scimitar: "revised-martial-equipment.items.JeCvoZa4sSyydAhk",
        shortglaive: "revised-martial-equipment.items.HTx29dckALprCzU7",
        warsword: "revised-martial-equipment.items.H17niWbraOjLaGZ4",

        //Crossbows
        blowgun: "revised-martial-equipment.items.EAKfRnKs5uOzlRAo",
        handcrossbow: "revised-martial-equipment.items.JAamcntcYRuu84XI",
        heavycrossbow: "revised-martial-equipment.items.yzWYbtWka32mYknF",
        hiddencrossbow: "revised-martial-equipment.items.RXj1E3IU9sqarNQM",
        lightcrossbow: "revised-martial-equipment.items.MF92jYBQ0e1gCymk",
        mauler: "revised-martial-equipment.items.goL2iv1o1np138dp",
        portableballista: "revised-martial-equipment.items.fTH9jQHTWrJcvL5v",
        repeatingcrossbow: "revised-martial-equipment.items.Qv8ZoSzG8TIJ3VWn",
        spinner: "revised-martial-equipment.items.JkY8X0wReTWaQogR",

        //Dueling Blades
        dagger: "revised-martial-equipment.items.KKUQxnw1OhvjwoWI",
        estoc: "revised-martial-equipment.items.n8CA4ZC9qmV5P2tV",
        kukri: "revised-martial-equipment.items.5tJzsyt32BJ2vEpu",
        rapier: "revised-martial-equipment.items.lEZZoZy6or1gNgwc",
        saber: "revised-martial-equipment.items.v1oBEqxjuBoFxGH0",
        sai: "revised-martial-equipment.items.0SUB0PVJGcADdKFC",
        shortsword: "revised-martial-equipment.items.krI627AuQiwouWcC",
        sickle: "revised-martial-equipment.items.fWnVHQ2GN8IqyUdh",
        smallsword: "revised-martial-equipment.items.Fn9AYRVEL5yk1oRN",
        swordbreaker: "revised-martial-equipment.items.ZIYJ2Q7Ac4ijLJSQ",

        //Firearms
        arquebus: "revised-martial-equipment.items.Lb0LL5rS8fy8LoI0",
        blunderbuss: "revised-martial-equipment.items.LT6XMDDhWyg97YHW",
        handcannon: "revised-martial-equipment.items.6iLN82b6Vtmbt709",
        portablecannon: "revised-martial-equipment.items.8O69sK3IKK5Rszt5",
        firelance: "revised-martial-equipment.items.CK6CJMpCuQUaQT4C",
        gunblade: "revised-martial-equipment.items.Efbp2sdMmeByJo1D",
        pepperbox: "revised-martial-equipment.items.JPVyfnu4tb2fNpsc",
        wristrocket: "revised-martial-equipment.items.TStyQEQVkmrk2W9y",

        //Flails And Whips
        doubleflail: "revised-martial-equipment.items.2arfVpnbozUeQE6X",
        lightflail: "revised-martial-equipment.items.OyL59qVhzwIiUxIo",
        heavyflail: "revised-martial-equipment.items.nOyQleNByCiryATu",
        poleflail: "revised-martial-equipment.items.p6ENSjLngdbEmZBi",
        meteorhammer: "revised-martial-equipment.items.i3jyHZLqYVh79XCK",
        nunchaku: "revised-martial-equipment.items.dgFLJNL0OIYD5gZQ",
        trisectionalstaff: "revised-martial-equipment.items.nY8G3pWluZ9LXlIh",
        whipsword: "revised-martial-equipment.items.Uv8NvqcmDScBRSiz",
        whip: "revised-martial-equipment.items.dOVVoPZyYW8fN2vl",

        //Hammers And Picks
        lighthammer: "revised-martial-equipment.items.A0i15WSoAAapo8Ho",
        warhammer: "revised-martial-equipment.items.h30LX9DGXHgI47ma",
        lucerne: "revised-martial-equipment.items.AZskfcOBXAGQaehj",
        maul: "revised-martial-equipment.items.CJHt9E14ggleORKy",
        lightpick: "revised-martial-equipment.items.RVfPOtjorqxgZ5Cu",
        wallpick: "revised-martial-equipment.items.IyK8HkiXN5Pp5ymb",
        warpick: "revised-martial-equipment.items.VioS5KwuJuCVkYFH",
        stiletto: "revised-martial-equipment.items.iwKx2yJ5LVY5fGbr",

        //Polearms
        bladedstaff: "revised-martial-equipment.items.D0mTh4oOZKJ7lmqV",
        glaive: "revised-martial-equipment.items.1KBXbjZIH2wlcefB",
        guisarme: "revised-martial-equipment.items.QU7Vd5FwRD63oTCY",
        lajatang: "revised-martial-equipment.items.E6xeHyi0pBtnhIZu",
        partisan: "revised-martial-equipment.items.OxUqUQKcstznMGkj",
        warscythe: "revised-martial-equipment.items.zHCfCFCvfO8aLo28",

        //Spears
        godendag: "revised-martial-equipment.items.nbFyNMzlAKO7n7Q4",
        harpoon: "revised-martial-equipment.items.nQZ9nCXgBVLl4zEy",
        javelin: "revised-martial-equipment.items.f3ABulUAjIwtfbqw",
        lance: "revised-martial-equipment.items.g3WxEiKes2kWUsey",
        pike: "revised-martial-equipment.items.sDZL0KmAvIzQe5qV",
        ravenbeak: "revised-martial-equipment.items.FWzc5EJx2NerXPe5",
        warspear: "revised-martial-equipment.items.yFq6nB7bx3dQFmkD",
        wingedspear: "revised-martial-equipment.items.SH4IVXVQ91bKmaoN",
        trident: "revised-martial-equipment.items.J97gXavUKHokZBZb",

        //Throwing Weapons
        bolas: "revised-martial-equipment.items.IG8uaPmKcWOOSDCi",
        boomerang: "revised-martial-equipment.items.NEKfhTvM1QTDY8MT",
        chakram: "revised-martial-equipment.items.OgQEvAJKKBWKizix",
        dart: "revised-martial-equipment.items.lY8WOt0Jt4lMXk4U",
        throwingknife: "revised-martial-equipment.items.SQ2jUuvHoniv1snv",
        kunai: "revised-martial-equipment.items.0bIIogfKxHMqx2sY",
        net: "revised-martial-equipment.items.Iiu7MPFAmJLAEzJo",
        throwingshot: "revised-martial-equipment.items.LLOyKbs5uU4UhTE3",
        throwingstar: "revised-martial-equipment.items.eCmyZTqYg2S95xAC",

        //Natural Weapons
        bite: "revised-martial-equipment.items.1BK9tTNN1UxEptcU",
        claw: "revised-martial-equipment.items.d3vA1oKARfTL7jpR",
        horns: "revised-martial-equipment.items.UkHsgHbAoXDzvMt9",
        slam: "revised-martial-equipment.items.wGPEOCUkePqzLQYe",
        tail: "revised-martial-equipment.items.bP5eyEMicl3e2X09",
        wings: "revised-martial-equipment.items.3Ohbz8NGVHC4W8R1",

    }

    CONFIG.DND5E.armorIds = {
        // chainshirt: "0zbDdPBcDERj2RmH",
        // studdedleather: "8SkScjqkRJgno4KP"

    }

    CONFIG.DND5E.shieldIds = {}
}
