var tswcalc = tswcalc || {};

tswcalc.import = function() {

    var start = function(vars) {
        for (var slotId in vars) {
            if (vars.hasOwnProperty(slotId)) {
                splitVars = vars[slotId].split(',');
                updateSlot(slotId, splitVars);
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var updateSlot = function(slotId, values) {
        var slotObj = tswcalc.slots[slotId];
        slotObj.ql('10.' + values[0]);
        if(slotObj.isWeapon()) {
            slotObj.wtype(tswcalc.data.wtype_mapping.to_name[values[1]]);
            slotObj.el.wtype.change();
        } else {
            slotObj.role(tswcalc.data.role_mapping.to_stat[values[1]]);
        }
        slotObj.glyphQl('10.' + values[2]);
        slotObj.primaryGlyph(tswcalc.data.stat_mapping.to_stat[values[3]]);
        slotObj.secondaryGlyph(tswcalc.data.stat_mapping.to_stat[values[4]]);
        slotObj.el.btn.primary[values[5]].click();
        slotObj.el.btn.secondary[values[6]].click();
        // support signets
        if (typeof values[7] !== 'undefined' && typeof values[8] !== 'undefined') {
            if (values[8] >= 80) {
                slotObj.el.btn.nyraid.prop('disabled', false);
                slotObj.el.btn.nyraid.prop('checked', true);
                slotObj.el.btn.nyraid.change();
            } else {
                var signetQuality = tswcalc.data.signet_quality_mapping.to_name[values[7]];
                var signetId = values[8] != '0' ? values[8] : 'none';
                checkIfNyRaidItemAndEnableCheckButton(slotId);
                changeSignet(slotId, signetQuality, signetId);
            }
        } else {
            checkIfNyRaidItemAndEnableCheckButton(slotId);
            changeSignet(slotId, 'none', 'none');
        }
    };

    var checkIfNyRaidItemAndEnableCheckButton = function(slotId) {
        var slotObj = tswcalc.slots[slotId];
        if (isAllowedNyRaidItem(slotId)) {
            slotObj.el.btn.nyraid.prop('disabled', false);
        }
    };

    var changeSignet = function(slotId, quality, id) {
        var slotObj = tswcalc.slots[slotId];
        slotObj.signetQuality(quality);
        slotObj.signetId(id);
        slotObj.el.signetId.change();
    };

    var isAllowedNyRaidItem = function(slotId) {
        var slotObj = tswcalc.slots[slotId];
        return !slotObj.isWeapon() && typeof tswcalc.data.ny_raid_items[slotId][slotObj.role()] !== 'undefined';
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();