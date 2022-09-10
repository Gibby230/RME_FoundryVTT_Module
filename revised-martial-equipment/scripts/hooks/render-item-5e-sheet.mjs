import { MODULE_NAME } from "../const.mjs";
import { WEAPON_PROPERTIES } from "./weapon-properties.js";

Hooks.on("renderItemSheet5e", (itemSheet, html, data) => {
    // console.log(`${WEAPON_PROPERTIES}`)
    // Add Weapon Training Levels
    html.find("[name='data.properties.mst']").parent().after("<label>Weapon Properties</label>")
    // html.find("[name='data.proficient']")[0].disabled = true

    const unt = html.find("[name='data.properties.unt']")[0]
    const bsc = html.find("[name='data.properties.bsc']")[0]
    const mst = html.find("[name='data.properties.mst']")[0]

    unt.onclick = function() {updateWeaponToUntrained(data, unt.checked, WEAPON_PROPERTIES.weapons, html, "unt")};
    bsc.onclick = function() {updateWeaponToUntrained(data, bsc.checked, WEAPON_PROPERTIES.weapons, html, "bsc")};
    mst.onclick = function() {updateWeaponToUntrained(data, mst.checked, WEAPON_PROPERTIES.weapons, html, "mst")};
});



/**
*   item - the item that is being changed
*   checked - if the training level is being turnd on or off
*   weapons - all weapons in RME properties
*   html - the page's html
*   level - the weapon trianing level
*/
function updateWeaponToUntrained(item, checked, weapons, html, level){
    const type = item.data.baseItem;
    if(type){
        var weapon_props = "";
        var value = ""
        var long = ""
        var damage = ""
        var versatile = ""
        // html.find("[name='data.proficient']")[0].disabled = false
        for(let i=0; i<weapons.length; i++){
            if(weapons[i].label == type){
                if(level=="unt"){
                    weapon_props = weapons[i].untrained.properties
                    value = weapons[i].untrained.range.value
                    long = weapons[i].untrained.range.long
                    damage = weapons[i].untrained.damage
                    versatile = weapons[i].untrained.versatile
                    html.find("[name='data.properties.bsc']")[0].checked = false
                    html.find("[name='data.properties.mst']")[0].checked = false
                    html.find("[name='data.proficient']")[0].checked = false
                }else if (level=="bsc"){
                    weapon_props = weapons[i].basic.properties
                    value = weapons[i].basic.range.value
                    long = weapons[i].basic.range.lon
                    damage = weapons[i].basic.damage
                    versatile = weapons[i].basic.versatile
                    html.find("[name='data.properties.unt']")[0].checked = false
                    html.find("[name='data.properties.mst']")[0].checked = false
                    html.find("[name='data.proficient']")[0].checked = true
                }else{
                    weapon_props = weapons[i].master.properties
                    value = weapons[i].master.range.value
                    long = weapons[i].master.range.lon
                    damage = weapons[i].master.damage
                    versatile = weapons[i].master.versatile
                    html.find("[name='data.properties.bsc']")[0].checked = false
                    html.find("[name='data.properties.unt']")[0].checked = false
                    html.find("[name='data.proficient']")[0].checked = true
                }
            }
        }

        if(checked){
            html.find("[name='data.range.value']")[0].value = value
            html.find("[name='data.range.long']")[0].long = long
            html.find("[name='data.damage.parts.0.0']")[0].value = damage
            html.find("[name='data.damage.versatile']")[0].value = versatile
        }else{
            html.find("[name='data.range.value']")[0].value = ""
            html.find("[name='data.range.long']")[0].long = ""
            html.find("[name='data.damage.parts.0.0']")[0].value = ""
            html.find("[name='data.damage.versatile']")[0].value = ""
        }


        // html.find("[name='data.proficient']")[0].disabled = true
        weapon_props = Object.entries(weapon_props)
        var x = ""
        var name = ""
        for(let i=0; i<weapon_props.length; i++){
            name = weapon_props[i][0]
            x = "[name='data.properties."+name+"']"
            if(checked){
                html.find(x)[0].checked = weapon_props[i][1]

            }else{
                html.find(x)[0].checked = false
            }
        }
    }
}
