stat_mapping = {
    to_num: {
        'none': 0,
        'critical-rating': 1,
        'critical-power': 2,
        'penetration-rating': 3,
        'hit-rating': 4,
        'block-rating': 5,
        'defense-rating': 6,
        'evade-rating': 7,
        'physical-protection': 8,
        'magical-protection': 9
    },

    to_stat: {
        0: 'none',
        1: 'critical-rating',
        2: 'critical-power',
        3: 'penetration-rating',
        4: 'hit-rating',
        5: 'block-rating',
        6: 'defense-rating',
        7: 'evade-rating',
        8: 'physical-protection',
        9: 'magical-protection'
    }
}

role_mapping = {
    to_num: {
        'tank': 1,
        'healer': 2,
        'dps': 3
    },

    to_stat: {
        0: 'none',
        1: 'tank',
        2: 'healer',
        3: 'dps'
    }
}

template_data = {
    slots: [{
        id_prefix: 'weapon',
        name: 'Weapon',
        is_weapon: true,
        group: 'weapon'
    }, {
        id_prefix: 'head',
        name: 'Head Talisman',
        group: 'head'
    }, {
        id_prefix: 'ring',
        name: 'Ring Talisman',
        group: 'major'
    }, {
        id_prefix: 'neck',
        name: 'Neck Talisman',
        group: 'major'
    }, {
        id_prefix: 'wrist',
        name: 'Wrist Talisman',
        group: 'major'
    }, {
        id_prefix: 'luck',
        name: 'Luck Talisman',
        group: 'minor'
    }, {
        id_prefix: 'waist',
        name: 'Waist Talisman',
        group: 'minor'
    }, {
        id_prefix: 'occult',
        name: 'Occult Talisman',
        group: 'minor'
    }]
}

bb_costs = {
    "weapon": {
        "10.0": {
            cost: 30
        },
        "10.1": {
            cost: 70
        },
        "10.2": {
            cost: 110
        },
        "10.3": {
            cost: 150
        },
        "10.4": {
            cost: 190
        },
        "10.5": {
            cost: 230,
            criterion_upgrade = true
        }
    },
    "talisman": {
        "10.0": {
            cost: 30
        },
        "10.1": {
            cost: 50
        },
        "10.2": {
            cost: 70
        },
        "10.3": {
            cost: 90
        },
        "10.4": {
            cost: 110
        },
        "10.5": {
            cost: 130,
            criterion_upgrade = true
        }
    },
    "glyph": {
        "10.0": {
            cost: 30
        },
        "10.1": {
            cost: 50
        },
        "10.2": {
            cost: 70
        },
        "10.3": {
            cost: 90
        },
        "10.4": {
            cost: 110
        },
        "10.5": {
            cost: 130,
            astral_fuse = true
        }
    }
}

custom_gear_data = {
    "weapon": {
        '10.0': {
            weapon_power: 398
        },
        '10.1': {
            weapon_power: 411
        },
        '10.2': {
            weapon_power: 423
        },
        '10.3': {
            weapon_power: 434
        },
        '10.4': {
            weapon_power: 446
        },
        '10.5': {
            weapon_power: 457
        }
    },
    "head": {
        heal_dps: {
            'ql10.0': {
                rating: 559
            },
            'ql10.1': {
                rating: 596
            },
            'ql10.2': {
                rating: 636
            },
            'ql10.3': {
                rating: 682
            },
            'ql10.4': {
                rating: 735
            },
            'ql10.5': {
                rating: 788
            }
        },
        tank: {
            'ql10.0': {
                hitpoints: 2100
            },
            'ql10.1': {
                hitpoints: 2194
            },
            'ql10.2': {
                hitpoints: 2288
            },
            'ql10.3': {
                hitpoints: 2382
            },
            'ql10.4': {
                hitpoints: 2476
            },
            'ql10.5': {
                hitpoints: 2570
            }
        }
    },
    "major": {
        heal_dps: {
            'ql10.0': {
                rating: 505
            },
            'ql10.1': {
                rating: 538
            },
            'ql10.2': {
                rating: 575
            },
            'ql10.3': {
                rating: 616
            },
            'ql10.4': {
                rating: 664
            },
            'ql10.5': {
                rating: 712
            }
        },
        tank: {
            'ql10.0': {
                hitpoints: 1897
            },
            'ql10.1': {
                hitpoints: 1982
            },
            'ql10.2': {
                hitpoints: 2067
            },
            'ql10.3': {
                hitpoints: 2152
            },
            'ql10.4': {
                hitpoints: 2237
            },
            'ql10.5': {
                hitpoints: 2322
            }
        }
    },
    "minor": {
        heal_dps: {
            'ql10.0': {
                rating: 325
            },
            'ql10.1': {
                rating: 346
            },
            'ql10.2': {
                rating: 369
            },
            'ql10.3': {
                rating: 396
            },
            'ql10.4': {
                rating: 427
            },
            'ql10.5': {
                rating: 458
            }
        },
        tank: {
            'ql10.0': {
                hitpoints: 1220
            },
            'ql10.1': {
                hitpoints: 1274
            },
            'ql10.2': {
                hitpoints: 1329
            },
            'ql10.3': {
                hitpoints: 1383
            },
            'ql10.4': {
                hitpoints: 1438
            },
            'ql10.5': {
                hitpoints: 1492
            }
        }
    }
}

glyph_data = {
    stat: {
        'hit-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'penetration-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'critical-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 112,
                                3: 167,
                                4: 223
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 112,
                                3: 167,
                                4: 223
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 65,
                                3: 97,
                                4: 130
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 120,
                                3: 181,
                                4: 241
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 120,
                                3: 181,
                                4: 241
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 109,
                                3: 163,
                                4: 217
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 70,
                                3: 105,
                                4: 140
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 59,
                                2: 118,
                                3: 176,
                                4: 235
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 38,
                                2: 76,
                                3: 113,
                                4: 151
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 141,
                                3: 212,
                                4: 283
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 141,
                                3: 212,
                                4: 283
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 131,
                                3: 192,
                                4: 255
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 41,
                                2: 82,
                                3: 123,
                                4: 164
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 309
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 309
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 279
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 227,
                                4: 303
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 48,
                                2: 97,
                                3: 146,
                                4: 195
                            }
                        }
                    }
                }
            }
        },
        'critical-power': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 108,
                                3: 161,
                                4: 215
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 69,
                                3: 104,
                                4: 138
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 128,
                                3: 191,
                                4: 255
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 128,
                                3: 191,
                                4: 255
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 58,
                                2: 115,
                                3: 173,
                                4: 231
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 37,
                                2: 74,
                                3: 111,
                                4: 148
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 136 / 68,
                                2: 273 / 205
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 136 / 68,
                                2: 273 / 205
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 123,
                                3: 185,
                                4: 246
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 79,
                                3: 119,
                                4: 158
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 73,
                                2: 145,
                                3: 218,
                                4: 291
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 73,
                                2: 145,
                                3: 218,
                                4: 291
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 66,
                                2: 128,
                                3: 197,
                                4: 263
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 42,
                                2: 84,
                                3: 127,
                                4: 169
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 310
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 310
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 280
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 74,
                                2: 148,
                                3: 222,
                                4: 296
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 48,
                                2: 95,
                                3: 143,
                                4: 191
                            }
                        }
                    }
                }
            }
        },
        'defense-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'block-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'evade-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 106,
                                3: 159,
                                4: 212
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 106,
                                3: 159,
                                4: 212
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 48,
                                2: 96,
                                3: 144,
                                4: 192
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 31,
                                2: 62,
                                3: 93,
                                4: 123
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 58,
                                2: 115,
                                3: 173,
                                4: 231
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 58,
                                2: 115,
                                3: 173,
                                4: 231
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 52,
                                2: 104,
                                3: 156,
                                4: 208
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 33,
                                2: 67,
                                3: 100,
                                4: 134
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 63,
                                2: 126,
                                3: 188,
                                4: 251
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 63,
                                2: 126,
                                3: 188,
                                4: 251
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 57,
                                2: 113,
                                3: 170,
                                4: 227
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 73,
                                3: 109,
                                4: 146
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 153,
                                3: 230,
                                4: 306
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 153,
                                3: 230,
                                4: 306
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 208,
                                4: 277
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 44,
                                2: 89,
                                3: 133,
                                4: 178
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 253,
                                4: 337
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 253,
                                4: 337
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 228,
                                4: 304
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 98,
                                3: 147,
                                4: 196
                            }
                        }
                    }
                }
            }
        },
        'physical-protection': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 99,
                                3: 148,
                                4: 197
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 63,
                                3: 95,
                                4: 127
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 108,
                                3: 162,
                                4: 215
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 69,
                                3: 104,
                                4: 138
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 59,
                                2: 117,
                                3: 176,
                                4: 235
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 38,
                                2: 76,
                                3: 113,
                                4: 151
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 131,
                                3: 192,
                                4: 256
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 41,
                                2: 82,
                                3: 124,
                                4: 165
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 280
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 228,
                                4: 304
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 98,
                                3: 146,
                                4: 195
                            }
                        }
                    }
                }
            }
        },
        'magical-protection': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 99,
                                3: 148,
                                4: 197
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 63,
                                3: 95,
                                4: 127
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 108,
                                3: 162,
                                4: 215
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 69,
                                3: 104,
                                4: 138
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 59,
                                2: 117,
                                3: 176,
                                4: 235
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 38,
                                2: 76,
                                3: 113,
                                4: 151
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 131,
                                3: 192,
                                4: 256
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 41,
                                2: 82,
                                3: 124,
                                4: 165
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 280
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 228,
                                4: 304
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 98,
                                3: 146,
                                4: 195
                            }
                        }
                    }
                }
            }
        }
    }
}