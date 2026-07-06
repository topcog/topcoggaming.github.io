window.TOPCOG_CHANGELOGS = {
  "archmage-idle": [
    {
      "date": "2026-07-06T16:34:43.000Z",
      "displayDate": "July 6, 2026",
      "body": "v1.2.0\n\nWhat's New in 1.2.0!\n- Big performance optimizations! Yahoo! :-D\n- Actions now consume 10 Warp Tokens at a time instead of one.\n- The new Warp Control shop purchase lets you save Warp Tokens instead of automatically spending them!\n- Scavenging rewards have been completely reworked!\n- Added a Reagents button to Storage.\n- Added an Auction Interest meter to the Bazaar.\n- The Bazaar item list now opens in a compact modal for quick sell toggles.\n- Mysterious Artifact tooltips now show each possible Identify outcome.\n- Chronomancy Warp speed displays are clearer, with a new tooltip showing how the final multiplier is calculated.\n- Fixed Appraisal Study actions so they can Echo.\n- Made Offline Gains respect Preserve Resources better.\n- Combat now has quick buttons to configure Flask and Tonic auto-use priority.\n- Guild Shop storage slots after Rank 0 are now free, with their Guild Mark costs moved into the other rank upgrades.\n\nAdditional Patch Notes\n- Added an Auction Interest meter to the Bazaar.\n- Increased Abyssal Eel's Attunement Mana Pool bonus from x1.15 to x1.30.\n- Fixed the Summoning Anchoring soul requirement display so the soul icon no longer overlaps large resource counts after changing spirits.\n- Unified gold-sale bonuses: Sale Price is now the single bonus that increases gold earned from selling items. Previous Gold Gain sources now grant Sale Price instead, keeping the same overall sale-value scaling while making the economy bonuses easier to understand.\n- Improved Low graphics quality text readability while keeping it lighter than Medium quality.\n- Swapped the Insight and Epiphany item icons so each tier now uses the intended artwork.\n- Added a dedicated Reagents filter button to Storage, using the Bones icon and keeping the filter row compact on mobile.\n- Storage now always keeps items auto-sorted; the old Auto-Sort toggle was removed.\n- Added a Tier sort option to Storage. Category sorting now also orders items within each category by tier where tier data exists.\n- Fixed Storage search box hit detection on Android so tapping the search field reliably focuses it.\n- Fixed a cold-start compositor layering issue that could let Research visuals overlap the mobile bottom navigation.\n- Removed hidden Sigilry skill-level Harmonization bonuses at levels 20, 50, and 80; Sigilry now only grants the bonuses shown in its milestone and action-level panels.\n- Added a one-time Sigilry tutorial popup explaining that unique sigils grant passive bonuses while kept in Storage.\n- Chronomancy now remembers your selected Warp and Stabilize actions when you leave and return to the view.\n- Fixed Chronomancy Warp action IO displays so Time Crystal output includes Time Crystal Output bonuses.\n- Added an Echo Chance tooltip on Chronomancy showing the current total broken down by source.\n- Clarified that echoed actions cannot echo again in the Chronomancy Echo Chance tooltip.\n- RuneCrafting action unlocks now offer only one same-tier action at a time.\n- Fixed the Offline Gains summary sometimes not appearing after returning to the game (most often after an overnight session), where a brief app switch right after launch could clear the summary before it was shown. Offline rewards were always applied; only the popup was being lost.\n- Item tooltips no longer show First Clear or Conquered location reward sources after that location has already been cleared or conquered.\n- Diplomacy tribute cost reduction bonuses now display as tribute cost multipliers, making high reductions easier to read.\n- Cauldron sidebar and header bonuses now use compact icon-and-multiplier formatting to avoid cropped navigation text.\n- Fixed Crucible catalyst energy balance so mid-tier Alchemy items no longer grant endgame amounts of Cauldron energy for Area runes.\n- Compact Scavenging and Diplomacy location status cards on mobile, moving them into the location heading row.\n- Fixed Echo Chance so it now applies to Scavenging and Diplomacy completions, including offline progress.\n- Fixed Appraisal Study previews so saved item selections stay in sync with the item that will actually be studied.\n- Clarified Mysterious Artifact bonus chance versus drop rate, and fixed drop-rate multipliers so they apply to the full Scavenging artifact drop chance.\n- Clarified the Field Research item description so it explains that it comes from other skills and accelerates Research actions.\n- Meditation Explore on mobile now keeps the Back button and Transcendent Stone counts in the sticky header.\n- Fixed Artifact Destruction in the Inferno Citadel, Glacial Fortress, and Tempest Spire so it reduces Combat Artifact damage instead of duplicating Tome Nullification's tome penalty.\n- Reduced unnecessary Alchemy screen updates from reagent selection state while keeping shared reagent inventory updates reactive across recipes.\n- Combat map difficulty numbers now appear on Steam/desktop as well as mobile.\n- Combat Flask and Tonic counts now use compact number formatting on the desktop combat screen.\n- Combat Flask and Tonic slots on Steam/desktop now show item tooltips and no longer swap to green Active cards during battle.\n- Added combat quick-action buttons for configuring Flask and Tonic auto-use priority after Alchemy is unlocked.\n- Improved Wizard and Academy tooltips: Academy wizard cards now show full wizard stats on desktop hover, Teacher's Pet text only appears for selected favorites, and Wizard spell damage values use compact combat formatting.\n- Changed Acolyte role chips to use a warmer combat-role color so they are easier to distinguish from Assistant chips.\n\nThanks for playing! Please don't hesitate to reach out if you have any problems!"
    }
  ],
  "tap-wizard-realms": [
    {
      "date": "2025-11-03T21:29:31.845Z",
      "displayDate": "November 3, 2025",
      "body": "Tap Wizard Realms is TopCog’s newest project!\nIt’s a classic idle + incremental game, combining what I think to be the best of many of my games! The game takes place in the Tap Wizard world with many familiar mechanics and themes.\n\nThe primary unique mechanic in TWR is the Spell Grid: a 4x4 grid where you place Spells and Glyphs. Spells are persistent across runs, and leveling them up is your primary meta-progression. Glyphs are a roguelite mechanic that reset each Run and apply location-based bonuses to the Spells in your Grid! In each location you’ll need to figure out the best combos of Spells + Glyphs to counter the unique enemies you’ll find there!\n\nI’m gunning for an Open Beta release in December, with 12 locations and 18 Spells. If that goes well, full-release on Android+iOS should follow soon! Yahoo!"
    },
    {
      "date": "2025-11-21T16:39:09.804Z",
      "displayDate": "November 21, 2025",
      "body": "v0.8.6\nChanges\n-Tuned Spark Scarabs\n-Base soul drop chance increased from 20% to 30% (same total soul gain, just reduced variance)\n-Better Daily Deals rates for various items\n-Orbs quest made easier\n-Rank Up bonus changed to Damage for now, reduced to 5% per rank (long-term, hoping for spell-unique rank up bonuses)\n\nFixes\n-Fixed issue with save file corruption, but the fix will recover corrupted saves. Unfortunately, you will need to reset the app data if you are getting a crash about “OverFlowException” when opening the app!\n-Fixed Alpha Strike\n-Fixed element-types of Chapter 2 locations\n-Fixed issue with cloud save\n-Random UI fixes"
    },
    {
      "date": "2025-11-22T01:55:43.482Z",
      "displayDate": "November 21, 2025",
      "body": "v0.8.7\nChanges\nThese spells buffed:\n-Frost Nova\n-Ice Beam\n-Meteor\n-Immolate\n-Spike Drop\n-Minor UI tweaks\n-Daily Deal costs and amounts tweaked\n-Backend version migration code added, and a gift given to beta testers!\n\nFixes\n-Death FX for Guardians fixed\n-Fixed Rank Up costs: getting to Rank 2 now only costs 10 pages instead of 20!"
    },
    {
      "date": "2025-11-22T17:36:49.558Z",
      "displayDate": "November 22, 2025",
      "body": "v0.8.8\nChanges\n-Higher rarity Spells now properly start at higher Ranks and Level. This change is retroactive!\n-Level Up cost for Rank 1 increased to x8 Tier 1 Reagents\n-Increased first-time clear rewards for some zones in chapters 1 and 2\n-Also Increased Reagent quantity in Chapter 1 by 10%\n-Added the current game version to settings items\n-Tuned daily deal appearance rates, and made there be 5 deals a day instead of 4\n\nFixes\n-Fixed daily deal costs again\n-Hardened save logic to save when app is force quit\n-Fixed a few UI bugs"
    },
    {
      "date": "2025-11-25T00:32:33.983Z",
      "displayDate": "November 24, 2025",
      "body": "v0.8.9\nBalance Changes\n-These spells reworked significantly:\n    Electrocute => faster DoT, DoTs can stack on targets. Target Range greater than Cast Range.\n    Immolate => DoTs can stack on targets. Target Range greater than Cast Range.\n    Meteor => always fires max meteors, can hit the same target. Target Range greater than Cast Range.\n    Spike Drop => 25% of damage is spread over all hit enemies\n    Ice Beam => can hit enemies more than once; will hit a single enemy multiple times if it is the only one\n    Lightning Beam => will hit a single enemy multiple times if it is the only one\n    Frost Nova => damage is split among hit enemies\n    Wall of Flame => damage is split among hit enemies, radius increased\n    Voltaic Sword => totally reworked!\n-New Quest types to kill Fire/Ice/Lightning enemies\n-Base Cast Range of all spells increased\n-Enchanted enemies no longer clear DoTs\n-Many Orb Interactions changed!\n-Orb types in locations are now randomized each day after you have cleared a location once\n\nQoL\n-Added some explainer text to Elemental Sensor\n-Grave Digger made slightly bigger\n-The loading screen now says Logging in for clarity\n-Items can be put back into bags now\n-Added help buttons showing Geode, Tome, and Boss/Guardian Soul drop info.\n-Location description now shows the Full Clear Yield after you’ve beaten the location\n-Locations description now shows the Orb Types\n\nFixes\n-Alpha Strike backend refactored so it works better with Spike Drop, Wall of Flame, Electrocute, and Immolate\n-Fixed Sealed Geode\n-Fixed Gold Gain Research\n-Fixed UI bug with confirmation popup\n-Fixed undiscovered spells from being able to earn XP\n-Fixed a balance issue causing difficulty to scale a bit too fast"
    },
    {
      "date": "2025-12-01T20:15:33.205Z",
      "displayDate": "December 1, 2025",
      "body": "v0.9.0\nNew\n-The Slipstream (multiplayer meta-item) and the Chalice are here! Big rewards for beta players, as you’ll be in the top league! It’s probably super buggy right now, just let me know whenever it says you’re banned, which is bound to happen\n-Trial 2 is now available to attempt! Chapter 3 coming soon\n\nChanges\n-It no longer costs 1 Page to Unlock a Spell: you can simply unlock it once you have any pages for it\n-Spellbook shows Level now (sum of all Spell Levels)\n-Chapter items have better visuals now\n-Added Open All buttons to container type items\n-Buffs to damage of DoT Spells: Immolate, Electrocute, Lightning Bolt, Frost Nova\n\nFixes\n-Fixed the Copy orb effect graphic\n-Fixed damage of various DoT effects\n-Fixed Voltaic Sword description and damage\n-Fixed some issues with Magnifier Glass UI\n-Fixed various random UI and backend things"
    },
    {
      "date": "2025-12-02T18:41:53.755Z",
      "displayDate": "December 2, 2025",
      "body": "v0.9.2\nFixes\n-Fixed Boss Souls giving 0 of reagent types\n-Fixed Trial of Ancients (now available)\n-Universal unban for everyone"
    },
    {
      "date": "2025-12-03T23:32:51.563Z",
      "displayDate": "December 3, 2025",
      "body": "0.9.3\nChanges\n-Mirror of Reflection changed: you gain 100 Insight always, regardless of chapter\n-Element affinity multipliers adjusted to be more forgiving\n-Rebalanced things a bit: mobs have slightly more hp in certain later zones\n-Zone Page drops are more diverse: 50% of the pages are of the zone element, and 50% are not\n\nFixes\n-Fixed issues with page drops not increasing in rarity after entering new chapter\n-Fixed Boss Souls AGAIN!\n-Fixed mismatch between Chalice help description and actual CP gained\n-Fixed Daily Deal Costs AGAIN!\n-Fixed some handling of SeasonQuests\n-Fixed Affliction not working properly or at all\n-Improved some backend code"
    },
    {
      "date": "2025-12-05T18:31:05.947Z",
      "displayDate": "December 5, 2025",
      "body": "v0.9.4\n-Fixed Arcane Tomes crashing the game\n-Fixed a backend problem\n-Fixed game crashes at high waves after obtaining magnifying glass"
    },
    {
      "date": "2025-12-06T22:09:35.468Z",
      "displayDate": "December 6, 2025",
      "body": "v0.9.5\nChanges\n-After beating Chapter 2, Chapter 1 rewards are reduced\n-Tap loading screen to open app store when an update is needed\n-Firing all orbs requires tapping near the center of the battlefield now\n-R-G Orbs now heal 15% HP\n-Full clear yield desc is more complete\n\nFixes\n-Fixed new season bug\n-Fixed issue with required client update\n-Fixed RNG stuff with page drops"
    },
    {
      "date": "2025-12-10T14:54:26.382Z",
      "displayDate": "December 10, 2025",
      "body": "Chunky update!\n\nv0.9.6\nNew\n-Added Google Play Linking in settings\n-Added the Cognition Core item\n-Added help entry for Spells in Spellbook\n-Added toggle for Chrono Fuel consumption\n-Added option to lock position of items in the main pack\n-Added UI SFX\n-New Quest types to kill enemies using fire/ice/lightning spells, and another to obtain epic or better glyphs\n\nChanges\n-Orb of Dreams bonus revised to be +25% Damage and Soul Gain, and duration is +4 hrs\n-Frost Nova now deals only DoT over 0.5 seconds (2 ticks)\n-Season Pass now defaults to going into the Utility Bag\n-Reagents clarify that they are used to Level Up Spells\n-Chapter container items are the right size\n-Revised descriptions for various spells to indicate projectile count\n-Removed the Use Magic Dice quest type\n\nFixes\n-Fixed a bug with early spells not being given correctly\n-Fixed Chrono Fuel not decreasing\n-Properly accounting for partial Orb of Dreams bonus when offline\n-Fixed Season Quests resetting every day"
    },
    {
      "date": "2025-12-11T20:16:12.658Z",
      "displayDate": "December 11, 2025",
      "body": "v0.9.7\nNew\n-Chapter 3 is now available! With it comes 5 new Zones (Trial not ready yet), and 3 new Legendary spells to obtain!\n-New option to show Absolute Health\n\nChanges\n-Guardians for almost every Zone in chapters 1 and 2 have been revised\n-Drop rates for Epic pages reduced at lower chapters"
    },
    {
      "date": "2025-12-13T18:27:14.031Z",
      "displayDate": "December 13, 2025",
      "body": "v0.9.8\nNew\n-Added Chapter Deal IAPs\n-Added Archmage Trove to the shop for completeness\n\nChanges\n-Level Up and Rank Up costs increased, to keep balance with new mechanics that grant more rewards, and to give some headroom for more future mechanics!\n-Shard Spitter initial cast range reduced\n\nFixes\n-Fixed a bug reducing the damage of a couple of spells\n-Chrono Fuel fixed again\n-Cleaned up some sprites\n-Fixed the description and contents info on the Archmage Trove (it’s better than it said)\n-Revised description of daily deals for pages and reagents"
    },
    {
      "date": "2025-12-15T15:12:48.051Z",
      "displayDate": "December 15, 2025",
      "body": "@everyone  Tap Wizard Realms is now available on Android, in open beta!\nhttps://play.google.com/store/apps/details?id=com.topcog.tapwizardrealms"
    },
    {
      "date": "2025-12-15T15:13:02.619Z",
      "displayDate": "December 15, 2025",
      "body": "...and updoot on reddit if you get a second!\nhttps://www.reddit.com/r/incremental_games/comments/1pn9p5f/tap_wizard_realms_android_open_beta_take_2/"
    },
    {
      "date": "2025-12-16T17:48:04.428Z",
      "displayDate": "December 16, 2025",
      "body": "v0.9.12\nNew\n-When the Hourglass is active, a quick button will toggle for it on the main screen\n-Expanded view on the Leaderboard: now see what Spells and Spell Levels people used when they last Awakened!\n-New Mythic Glyphs can be found starting in Chapter 2!\n-New (possible) Glyph area of effects for Legendary (and Mythic) glyphs\n\nChanges\n-Opening the Staff, Glyph Bag, or a Glyph will now show the locked-slot numbers\n-After advancing to Chapter 2, the Time Crystal rewards and Guardian Page drops for chapter 1 locations are reduced\n-Chrono Forge Costs increased slightly\n-Time Crystal reward scaling with chapter increased from 3.0 to 3.33\n\nFixes\n-The Cosmetics in the shop are back!\n-Fixed Quests to kill enemies using Ice or Lightning spells\n-Fixed the “tap to open play store” screen\n-Fixed an issue with some parts of the RNG not working properly\n-Fixed Staff being able to pick a glyph immediately upon entering a location\n-Fixed some backend code"
    },
    {
      "date": "2025-12-16T21:19:31.681Z",
      "displayDate": "December 16, 2025",
      "body": "v0.9.13\n-Fixed a game-breaking bug introduced in the last update!"
    },
    {
      "date": "2025-12-16T22:27:24.946Z",
      "displayDate": "December 16, 2025",
      "body": "v0.9.14\nChanges\n-Spell Pages in Daily Deals are now appropriately rare/costly based on Spell Rarity!\n\nFixes\n-Fixed Wall of Flame and Electro Orb not using DoT Glyphs properly\n-Fixed a backend issue that could crash the game\n-Can no longer move cosmetic item containers from the shop\n-Daily Deals no longer show full spell and reagent descriptions"
    },
    {
      "date": "2025-12-17T21:29:17.716Z",
      "displayDate": "December 17, 2025",
      "body": "v0.9.15\nNew\n-Daily Rifts are now available from the Slipstream after reaching Chapter 3! These are short, random daily challenges that award a couple of different nice things.\n\nChanges\n-Fixed a bug with Glyph generation not being different in Chapter 3!\n-Chapter 1 rewards drastically reduced after entering Chapter 2!\n-You now only gain Insight when awakening in your highest chapter\n-Dragging Spells/Glyphs no longer close the GlyphBag/SpellBook\n-Added a note to Sealed Geode to make it more clear\n-Displayed Enemy Damage is now more accurate (it was displaying lower than it should in higher locations; but without decimals you might not notice in lower chapters)\n\nFixes\n-Fixed issues with google linking (and it will now load your game properly)\n-Fixed some bugs with Electro Orb\n-Fixed many random backend things\n-Fixed certain items sometimes erroneously having pips on them\n-Fixed an issue that could cause some spells to crash the game"
    },
    {
      "date": "2025-12-19T06:28:52.999Z",
      "displayDate": "December 19, 2025",
      "body": "v0.9.17\nBalance Changes\n\n• All Epic glyphs have slightly higher bonus magnitudes\n• Affliction glyphs give +25% DoT damage now\n• The Hourglass activates automatically when entering a Trial\n\nUI Overhaul\n\n• A big revision of the UI!\n• There are 3 new top-level organizational items: Progression, Tools, and Curios. Hopefully they are pretty self-explanatory!\n• You’ll see various items appear on the right side of the screen now at appropriate times\n• Stats panel moved below spell grid; Telescope now lives in Settings and you can hide stats\n• Numerous icons have been revised\n• Removed the Chrono Staff item: Sealed Geodes now explain how you get them\n• Combined the Magnifying Glass and Elemental Sensor into 1 item\n• Removed the Auto Transmuter. Instead, a quick-button appears to transmute all souls\n• Removed the Mirror of Reflection: its ability is now innate\n• Warp Crystal UI shows different color text based on multiplier (white => green => red)\n• The Warp Crystal item itself is now a passive item, only activatable via the quick-button\n\nFixes\n\n• Fixed broken shop items from the last update – woops!\n• Fixed glitchy behavior when tapping the map when it’s already open\n• Fixed an RNG issue\n• Fixed enemy damage stat displaying wrong\n• Fixed visual glitch in the Chalice"
    },
    {
      "date": "2025-12-20T20:32:27.465Z",
      "displayDate": "December 20, 2025",
      "body": "v0.9.18\nNew\n\n• Hourglass is now toggled to be shown / hidden, and you can adjust the slow amount\n• New option to show locked slot numbers on spellbook and glyph bag\n• New option to slow down enemy death effects – just for fun!\n\nBalance Changes\n\n• Fixed a balancing issue: various enemies in certain zones have a bit more hp\n• Difficulty scaling of mob_hp(chapter, wave, expected_glyphs) decreased\n• Rift difficulty reduced by 20%, and even more when more Glyphs available\n• The downside of Tempered Magic Gyphs no longer scales with Rarity\n\nChanges\n\n• Revised the Spell UI quite a bit!\n• Spike drop impact FX is more significant\n• New icon for Standard Enemies\n\nFixes\n\n• Fixed Wall of Flame double dipping from some glyphs\n• Fixed various contextual button bugs\n• Fixed Hats in the Chalice\n• Fixed Chrono Fuel not decaying – AGAIN!!!\n• Fixed game-breaking version migration bug"
    },
    {
      "date": "2025-12-23T03:32:11.211Z",
      "displayDate": "December 22, 2025",
      "body": "v0.9.19\nNew\n\n• The Ash Nomad in 3.2 is now Evasive, giving a preview of upcoming new enemy Archetypes in Chapter 4!\n\nChanges\n\n• Flat DR reduces DoT damage upon application, not per tick\n• Enchanted enemies now clear DoTs when an hp bar is destroyed\n• Reduced base HP and DR for all Shielded enemies (Flat DR)\n• XP Requirements for spells reduced a bit\n• Simplified spell XP requirements, and they always increase now\n\nFixes\n\n• Fixed Season Compass items not appearing right away\n• Removed duplicate lock main pack option\n• Fixed Telescope option not saving properly\n• Fixed Chrono Fuel again. Maybe.\n• Fixed bugs with multiple season compass unlocks\n• Fixed visual bug with Rank Up requirements\n• Fixed rerolling a pinned quest not updating the UI"
    },
    {
      "date": "2025-12-24T00:01:34.866Z",
      "displayDate": "December 23, 2025",
      "body": "v0.9.20-21\nFixes\n\n• Fixed Chrono Fuel again. Maybe! Who knows. But I changed Chrono Fuel related code! xD\n• Fixed daily deals not being deals in rare cases\n• Fixed hp bars counting for “Kill with X spells” quests\n• Fixed google linking (broken in v0.0.20)\n• Fixed Crucible description (said +1% instead of +5% damage)"
    },
    {
      "date": "2025-12-29T21:52:14.549Z",
      "displayDate": "December 29, 2025",
      "body": "v0.10.1\nHuge update!!!\n\nNew\n\n• Daily Rifts have been completely overhauled: they now function as a randomized normal-length Zone with a first-clear bonus each day! They also unlock at 2.6\n• New, subtle Enemy swaying FX, and pathing differences!\n• Background music and relevant options added!\n• The Loading screen shows different images now\n• Visual change: Spells deal x10 less damage and enemies have x10 less hp. This makes enemy “Base Stats” line up with spell damage in a more logical way.\n• New App Icon!\n\nBalance\n\n• The Cognition Core no longer impacts Season Quests\n• Daily Quests award 25 less Insight upon completion\n• Trial 2 slightly easier\n• All Chapter 1 locations are now 50 waves long after the first clear\n• Reduced number of Grave Diggers in Trial 2\n\nQoL\n\n• Tapping the combat backdrop will only fire all orbs if no windows are open at top. Otherwise, it will close any open windows at top.\n• New Detailed Option to make damage number smaller (which is also the new default)\n• Telescope now shows power-normalized DPS instead of Power gain / hr\n• Optimization Pass => performance is better!\n• Added a note to the start of Trial 2 about going back to get stronger\n\nFixes\n\n• Fixed Chapter 3 Title\n• Probable fix for Damage Number vs Spell info off by 1\n• Fixed Spell stats not displaying correctly after game launch\n• Fixed an edge case where pips would stay on container items erroneously\n• Fixed Season Quests being missing for new players\n• Pinned quests will now persist\n• New Server backend\n• No longer gain Power when teleporting out of a location\n• Fixed bug where glyphs would not apply to a spell if the spell was moved in the grid"
    },
    {
      "date": "2025-12-30T14:26:18.923Z",
      "displayDate": "December 30, 2025",
      "body": "v0.10.2\nBugfix update!"
    },
    {
      "date": "2025-12-30T18:17:03.647Z",
      "displayDate": "December 30, 2025",
      "body": "v0.10.3\n\n• Soul drop chance now scales with mob threat, aka weak enemies drop less, strong enemies drop more\n• CP Gain calculation is now correct\n• Fixed a few backend bugs"
    },
    {
      "date": "2026-01-01T01:29:40.704Z",
      "displayDate": "December 31, 2025",
      "body": "v0.10.6\n\n• Removed Rank Up daily quest\n• Fixed a bug with Page drops sometimes being less\n• Fixed CP Gain not reducing after each awakening, and reduced the loss to 40%"
    },
    {
      "date": "2026-01-01T15:00:49.408Z",
      "displayDate": "January 1, 2026",
      "body": "v0.10.7\n\n• Fixed Season not resetting"
    },
    {
      "date": "2026-01-02T05:30:01.341Z",
      "displayDate": "January 2, 2026",
      "body": "v0.11.0\n\n• Chapter 4 is now available! Yahoo!\n\nBalance Changes\n\n• Frozen Orb hit radius increased, and the hit radius does not decrease when it deals damage (even though visually it gets smaller)\n• Frozen Orb properly factors in damage to shielded and armored enemies\n• Evasive enemies have more hp\n• Electro Orb won’t get stuck as often\n• Chrono Forge upgrades costs increased a bit"
    },
    {
      "date": "2026-01-03T17:19:45.108Z",
      "displayDate": "January 3, 2026",
      "body": "v0.11.1-2\nNew\n\n• Added the Codex!\n• Added help window to the crucible\n\nBalance Changes\n\n• Spells now gain the same amount of XP whether they are in use or not\n• XP Requirements drastically reduced (current xp reduced by x10 to compensate)\n• Spell XP gain now scales by x2 with Chapter\n• Most higher Refinement durations decreased\n\nFixes\n\n• Fixed some location descriptions"
    },
    {
      "date": "2026-01-07T15:33:46.101Z",
      "displayDate": "January 7, 2026",
      "body": "v0.12.0\nNew\n\n• The Slipstream Exchange is here! Use it to Craft spells you want with the help of other Wizards!\n• New item to set your Motto! View mottos by tapping players in the Chalice\n• The new Chapter 4 spells now start at Rank 3. If you have already obtained these spells, they will be ranked up automatically!\n\nFixes\n\n• Fixed the Codex disappearing\n• Aligned spell levels on Chalice\n• Fixed plate symbols on boss being too small\n• If you are using fewer than 4 spells when awakening, your leaderboard avatar will use your top leveled spells\n• Fixed an issue with Rift Grid generation\n• Probable fix for inconsistent spell bar colors"
    },
    {
      "date": "2026-01-08T01:27:03.564Z",
      "displayDate": "January 7, 2026",
      "body": "v0.12.1\n\n• Fixed bugs with Mottos in the Chalice!"
    },
    {
      "date": "2026-01-08T18:08:14.195Z",
      "displayDate": "January 8, 2026",
      "body": "v0.12.2\nNew\n\n• New Glyph Type in Chapter 4: Chimerism!\n\nChanges\n\n• Blight is now unlocked in Chapter 3 (up from chapter 2)\n• Normal enemies have more consistent damage and speed relationships (no base stats changed, but a change in how random factors are created for individual enemies)\n• Fixed boss and guardian stats from being slightly variable, resulting in difficulty being more variable than intended\n\nSlipstream Exchange\n\n• You now Assist before Requesting\n• Polished the Exchange language\n• Added help to the Exchange"
    },
    {
      "date": "2026-01-09T02:10:58.556Z",
      "displayDate": "January 8, 2026",
      "body": "v0.12.3\nChanges\n\n• New detailed option to show boss hp bars underneath of them (better for visibility on 16:9 aspect ratio)\n• Limited the maximum size of bosses\n\nFixes\n\n• Fixed blank usernames\n• Fixed Slipstream bugs"
    },
    {
      "date": "2026-01-10T01:52:02.624Z",
      "displayDate": "January 9, 2026",
      "body": "v0.12.4\n\n• Fixes for the Slipstream exchange!"
    },
    {
      "date": "2026-01-10T18:59:53.033Z",
      "displayDate": "January 10, 2026",
      "body": "v0.12.6\n\n• Fixed backdrops of Ashen Volcano and Tempest Spire (how did that happen?!)\n• Better backend support for long game sessions\n• Improved customer support capabilities"
    },
    {
      "date": "2026-01-16T15:03:05.935Z",
      "displayDate": "January 16, 2026",
      "body": "v0.12.7\n\n• Updated and fixed some backend stuff!\n• Full launch is right around the corner!"
    },
    {
      "date": "2026-01-23T14:26:30.410Z",
      "displayDate": "January 23, 2026",
      "body": "v1.0.0\nRelease on iOS and full release on Android is planned for February 2nd!\n\nNew\n-Locations now track your fastest clear time (measured in real-time from the start of the location to defeating the Guardian)\n-Added February cosmetic in the backend\n-Higher hp enemies drop more souls now\n-Y-Y orbs deal less damage\n\nFixes\n-Fixed type of Hoarde, and renamed Swarm archetype to Horde\n-Fixed UI bug with Glyphs\n-Fixed UI bug with Crucible\n-Flex Pages can be moved when you have 0!"
    },
    {
      "date": "2026-01-29T20:41:16.712Z",
      "displayDate": "January 29, 2026",
      "body": "v1.1.0\nNew\n\n• Chapter 5 is here! In it you will find 6 new Zones with 1 new Glyph and 3 new Spells:\n• • Fiery Scythe\n• • Hailstorm\n• • Ionic Arrow\n\nChanges\n\n• If re-applied, new DoT damage is added to the existing DoT.\n• Affliction changed to deal damage over 1 s (instead of 2 s)\n• Added the “Old” motto word\n• More backdrops possible for the loading screen\n• Frost Nova Cast and Target range increased\n\nFixed\n-Fixed some issues with the Hourglass not showing in Rifts"
    },
    {
      "date": "2026-02-02T16:03:10.263Z",
      "displayDate": "February 2, 2026",
      "body": "v1.1.1\nJust some fixes and improvements!\n\n• Improved Music performance\n• Codex glyphs descriptions are hidden properly\n• Fixed crash that could happen after leveling up a spell (and possibly other rare scenarios)\n• Fixed a bug with Reverb\n• Fixed the Chapter bundle having 100 dice (typo!), but also increased the number of Dice in all Chapter bundles\n• Fixed inconsistent formatting in Quest Log\n• Fixed sizing of Guardians\n• If receiving gems from customer support, you won’t get banned\n• Hailstorm damage percent text is now black"
    },
    {
      "date": "2026-02-03T15:48:45.778Z",
      "displayDate": "February 3, 2026",
      "body": "v1.1.2\nCritical bug fix!"
    },
    {
      "date": "2026-02-05T17:11:09.736Z",
      "displayDate": "February 5, 2026",
      "body": "v1.1.4\nBalance Changes\n\n• Chapter 2 and 3 Trials made slightly easier!\n• All enemy Shield value (Flat DR) reduced by 50%!\n• Bosses and Guardians have an additional reduced 50% Shield\n• Mythic Glyph effect power multiplier is higher\n• Affliction base damage increased to 30%\n\nFixes\n\n• You can now move Flex Pages (for real this time!)\n• Fixed a bug with the Flat DR values shown for enemies (it was lower than what was displayed most of the time)\n• Fixed Quests that require you to reach a certain Wave not updating progress\n• Fixed shader edge case that could cause problems on some devices\n• Updated some backend components"
    },
    {
      "date": "2026-02-13T20:08:10.793Z",
      "displayDate": "February 13, 2026",
      "body": "v1.1.7\nNew\n\n• Spells return to the spots in the Spellbook they were taken from when a Zone ends\n• Damage numbers are now colored according to element type\n• Added Worldshaker to music track selection\n• New detailed option to disable release-all orbs\n\nBalance\n\n• Fiery Scythe: Size increased slightly, movement totally revised\n• Lightning Bolt: Size increased slightly, now deals x1.4 damage to enemies below 50% hp\n• Hailstorm bonus damage multiplier now x2.5\n• Frozen Orb logic fixed / improved\n• Thunder Strike damage increased by 5%\n• Ice Beam damage reduced by 8% :’)\n• Daily Rifts made a bit easier\n• Wave 70 drops a bit more Reagents\n• Troves cost a bit less and there’s a x10 Trove option (same rate)\n• XP in Limbo now scales with your highest Chapter\n\nFixes\n\n• Fixed some goofy flex page movement behavior\n• Probable fix for game crash on start and input issues for some users\n• DoT Kills now count for Elemental kills Quests\n• Fixed fastest time in rift not tracking properly (probably)\n• Gold value on the item face should use compact form if very big"
    },
    {
      "date": "2026-02-21T18:11:08.725Z",
      "displayDate": "February 21, 2026",
      "body": "v1.2.0 (live on ios, android live soon)\n\nChapter 6 is now available! With it comes 6 new Zones and 3 new spells: Magma Ripper, Frost Fairy, and Call Lightning!\n\nNew\n\n• Using a Magic Dice guarantees that all re-rolled glyphs have equal or higher rarity.\n• New Extra Bag item to unlock, to aid in your organization\n• Added if a spell is a Projectile to the spell help screen\n• Better support for dual-archetype enemies\n• Quests to kill Standard enemies no longer given after entering Chapter 6\n\nFixes\n\n• Amazingly, Armor was previously not functioning at all! It is now working properly. To help balance things properly, all enemies with Armor have reduced hp (since they will be tougher for non-DoT spells now).\n• Fixed Magic Condenser not showing proper XP rate\n• Ionic Arrow was not reducing HP Bars on Enchanted enemies, and was not having reduced effect on bosses\n• Ionic Arrow will not reduce stats if an enemy dodges it\n• Fixed a bug causing stacked DoTs to deal extra damage\n• Repaired some orphaned spells for some players\n• Fixed Rift location button popping up in chapter 2 before it should\n• Fixed inaccuracies in sidebar enemy info: guardian’s have lower elemental multipliers, many enemies had more hp and shield than stated\n• Fixed Frozen Orb being unable to hit the same enemy more than once"
    },
    {
      "date": "2026-03-01T02:59:33.715Z",
      "displayDate": "February 28, 2026",
      "body": "v1.2.2\nNew\n\n• Spells under the effect of Chimeric glyphs will have the color of their  damage numbers changed accordingly\n• Added the Necromancer and Elemental Druid skins to the shop!\n\nChanges\n\n• Starting in March, the Top Hat will be available for Gems!\n• Chapter 3 Trial made a bit easier\n• Made a note in the Chalice ? that resets each month\n• After being Ranked Up, a spell restores it’s Spellbook position if possible\n• Spells now remember their Spellbook position when being swapped out of the Spell grid\n\nFixes\n\n• Fixed Frost Fairy extra bonuses\n• Fixed info in Spellbook ?\n• Fixed the game asking the player to rate it more often than intended"
    },
    {
      "date": "2026-03-03T22:24:17.505Z",
      "displayDate": "March 3, 2026",
      "body": "v1.2.5\nChanges\n\n• Offline Gain reduction eliminated: gains are now 100% for souls and gold (already was 100% for xp)\n• Spell XP gain in unusual locations like Rifts and Challenges is treated like being in the highest chapter you've reached\n• Archetypes of enemies you are currently facing can now be seen in the Magnifying Glass, even if you haven’t reached the needed Chapter yet\n• Daily Quest types now pull from the possible Elements and Archetypes of the highest Chapter you have reached\n• Added Chapter 6 backdrops to the Rift pool\n• YY Orb strikes deal more damage now\n\nFixes\n\n• Fixed name of Reverb Glyph\n• Fixed dual archetypes not showing in Codex enemies\n• Fixed problem with early game tutorial quests"
    },
    {
      "date": "2026-03-09T13:57:46.556Z",
      "displayDate": "March 9, 2026",
      "body": "v1.3.0 (live today)\nDaily Challenges are now available!\n\n• Compete with other players in a 1-life survival run on a level playing field!\n• The first attempt each day awards a Magic Dice, and Gem prizes based on your score percentile are given out the next day!\n• Firebolt also received a minor buff!"
    },
    {
      "date": "2026-03-20T13:56:15.702Z",
      "displayDate": "March 20, 2026",
      "body": "v1.4.3\n• Chapter 7 is now available! With it comes 6 new Zones and 3 new spells: Flaming Ram, Arctic Penguin, and Voltaic Toad!\n• The Shop now also sells a few Rings starting in Chapter 5! Rings provide permanent passive benefits and abilities.\n• Frozen Hammer now destroys 10% of shields on impact!\n• Various other QoL improvements and bug fixes!\n(bugfix update for a few issues coming on monday!)"
    },
    {
      "date": "2026-03-27T12:03:36.579Z",
      "displayDate": "March 27, 2026",
      "body": "v1.4.4\nChanges\n\n• The Flaming Ram damage bonus is now multiplicative!\n\nFixes\n\n• Dual Archetype mobs properly count towards quests\n• Fixed a bug when refining Flaming Ram\n• Fixed a bug with Floating Orbs"
    },
    {
      "date": "2026-04-30T13:29:24.560Z",
      "displayDate": "April 30, 2026",
      "body": "v1.4.5\n-Tweaked starting tutorial!\n-Backend update for May seasn!\n-Confirmation prompt for Refining!"
    },
    {
      "date": "2026-04-30T13:30:01.300Z",
      "displayDate": "April 30, 2026",
      "body": "Apologies for the slower pace of updates this last month! Lots of IRL stuff got in the way, as well as juggling different projects!"
    },
    {
      "date": "2026-05-28T11:51:13.903Z",
      "displayDate": "May 28, 2026",
      "body": "As you may have noticed, not as many updates lately! My plan is to finish up Archmage Idle (which is a smaller scope project, not a live-service multiplayer game), then return to TWR to finish the remaining content."
    }
  ],
  "neon-spellstorm": [],
  "tap-wizard-2": [
    {
      "date": "2021-08-13T18:30:40.491Z",
      "displayDate": "August 13, 2021",
      "body": "Going to try out a real-time changelog idea.  Essentially full release notes for a build.  Might scrap the idea, we'll see."
    },
    {
      "date": "2021-08-13T18:31:26.037Z",
      "displayDate": "August 13, 2021",
      "body": "v0.7.0\n-Spellbook names\n-Sense gold no icon\n-Ad bonus stacking\n-Fixed cloud save ui bug\n-Awakening UI going up too much\n-Activate research doesn't update when you have enough gold to start it if you already have the icon selected (You just have to re-select the icon)\n-Enchanting crashing the game\n-Totem count not saving\n-Fiery Deluge bug\n-Joystick movement lets you control wizard speed\n-Negative Ad Timer\n-Fixed early scaling issue with needed xp\n-Fixed achievement % display\n-Investigate Unity -> what to do in case of crash\n-Got duplicate rune (was a bugged rune, Last Stand)\n-All combat totems buffed\n-Perk Level resets to 1 after resartting\n-Rune counts not saving\n-Ice Bomb stuck in side of wall\n-Joystick can move farther into edge than touch to move\n-Some rune MyText is failing\n-Treasure Hunter rune graphic\n-Added reset game item\n-Fixed sounds not muting\n-Fixed new item landing position if pack full\n-Legacy text in Contact email\n-New backend version migration system\n-Still had gold after abandoning\n-Abandoning and choosing new spellbook didn't work\n-Fixed display issues with Garry\n-Timeshards are now gained every second\n-Content-locked mobs and runes behind Awakening as needed (that is, you can't just grind waves to see all mobs and runes)\n-Timeshard rate can't increase past the Awakening Level (i.e., can't grind levels purely to raise your timeshard rate, must awaken)\n-Robust timekeeping code\n-Pause and resume app during loading crashes the game\n-Robust exception handling\n-Fixed other random bugs too"
    },
    {
      "date": "2021-08-16T15:32:08.828Z",
      "displayDate": "August 16, 2021",
      "body": "v0.7.1\n-Debug analytics\n-New Tutorial Prologue\n-Fixed an edge case crash with frenzied mobs and accelerated time steps\n-Fixed a crash with the string table\n-Options do not begin with indicators\n-Fixed Empower Token graphic\n-Finish configuring and testing the Shop\n-Fixed using a jagged totem removes any that you have"
    },
    {
      "date": "2021-08-17T11:39:45.445Z",
      "displayDate": "August 17, 2021",
      "body": "v0.7.2\n-Fixed crash on startup for older save versions\n-CrashHandler display not positioned right\n-Fixed window display on narrow aspect screens\n-Fixed bug with spawning Runes"
    },
    {
      "date": "2021-08-17T12:53:03.833Z",
      "displayDate": "August 17, 2021",
      "body": "v0.7.3\n-Better prologue\n-Draft art for all spell icons\n-New spellbook icons\n-Tapping an item with an open window will close the window\n-Obelisk Shard shows how many enchantments you can do when possible\n-Augment crashes the game\n-Status Effects have correct descriptions\n-Fixed crash with fiery deluge\n-Fixed bugs with the backend seed pairing function\n-Status Effect damage rework\n-Give Status perks now stack\n-Restrict contents of achievements and bestiary containers\n-Jagged totem cost didn't go up\n-Bunny Totem graphic swapped\n-Rune count not saving\n-Fixed bugs related to quitting game while enchanting\n-Fixed funding cost\n-Fixed some missing strings\n-Fixed rune rarities stomping each other\n-Can now swap containers with each other\n-Probably fix for Last Stand issues\n-Probable fix for rune graphics positioning\n-Probable fix for spurious totem appearances\n-Fixed bug related to cloud loading multiple times in a session\n-Fixed bugs with offline gains"
    },
    {
      "date": "2021-08-18T12:44:39.467Z",
      "displayDate": "August 18, 2021",
      "body": "v0.7.4\n-Fixed Last Stand description\n-Fixed missing Treasure Hunter graphic\n-Fixed missing Spell Icons\n-Fixed Spirit Totem icon bug\n-Totem graphics update upon rolling a new one\n-Minor perf optimization\n-Obelisk Shard text and color should be more accurate\n-Fixed bug with enchanting discount research\n-The upper UI will change position somewhat based on your screen size\n-The lower UI grid moved up slightly\n-Fixed 3rd Spell Perk bug\n-Linked Skins and Spellbooks together\n-New Class Names\n-New Skins\n-Rune counts save properly\n-Stat scroll online and offline the same\n-Chronosphere locked at saying 40 days\n-High level research bonus descriptions are wrong\n-Fixed a memory leak\n-Probable fix for Fiery Deluge tracking perk"
    },
    {
      "date": "2021-08-19T14:39:11.443Z",
      "displayDate": "August 19, 2021",
      "body": "v0.7.5\n-Awakening!\n-Probable fix for obelisk shard icon text\n-Bestiary can be added to bags\n-Fixed chronosphere time to kindle\n-Fixed tracking of offline time\n-Fixed a memory leak related to hot-loading the game when a window with a container is open\n-Ice Bolt can properly hit multiple enemies per frame\n-Fixed a bug that was crashing the game\n-Get free respec every week\n-Get free Magic Die each Awakening\n-Fixed Fiery Deluge fireball perk\n-Fixed where Fiery Deluge deals damage\n-Fixed bug with early rune troves\n-If mobs get blasted too far offscreen, they will lose all momentum"
    },
    {
      "date": "2021-08-20T15:14:16.340Z",
      "displayDate": "August 20, 2021",
      "body": "v0.7.7\n-Gigantism Rune!\n-Various spelling and grammar fixes!\n-Can't remove lock in limbo item\n-Rune bag can now hold bags\n-Fixed Memory Tree interface issues\n-Only allow options items in options menu\n-Fixed research descriptions still wrong\n-Don't allow respec if nothing to respec\n-Troves will not spawn unless 5 or more enemies are alive\n-Fixed bug with an Ice Bomb Perk"
    },
    {
      "date": "2021-08-22T01:35:00.497Z",
      "displayDate": "August 21, 2021",
      "body": "v0.7.8\n-Fixed some nefarious bugs with the UI!\n-Mobs now have shadows!\n-More typo fixes\n-Possible fix for missing offline gains\n-Firestorm will no longer make enemies invincible"
    },
    {
      "date": "2021-08-23T15:26:00.802Z",
      "displayDate": "August 23, 2021",
      "body": "v0.7.9\n-Fixed tons of bugs!\n-Implemented a variety of things, including many suggestions!\nhttps://gyazo.com/6bbce34905d0b86dd50b2f6524e4b052"
    },
    {
      "date": "2021-08-23T15:26:04.139Z",
      "displayDate": "August 23, 2021",
      "body": "https://gyazo.com/6f70499546b21964eb70a5b8178a5dbe"
    },
    {
      "date": "2021-08-24T18:49:19.222Z",
      "displayDate": "August 24, 2021",
      "body": "v0.8.0-0.8.1\n\nNew\n-New Rune: Fight and Flight\n-New Item: Runic Utility Bag\n-Can view detailed Spell stats\n-Staged/Active Runes are saved to file now\n-\"Destroy All Empty\" option on Bag Bag\n-Names for basic status effects\n\nChanges\n-Adjusted Emberfreeze skin positioning\n-Repulsion Rune rebalanced\n-Rune drop rate cut in more than half\n-Revised More/Less nomenclature\n-Achievement requirements increased\n-Soul and Gold Troves buffed\n-Rabbit Totem buffed\n-Owl Totem buffed\n-Give notification when can awaken\n-Separate Transient Bonuses from Runes\n-Clarified Master Reclaimer desc\n-Spell Slot 4 available sooner\n-Track time per wizard and fastest Awakening (at cap)\n-Acrobatics Keystone buffed\n-Freeze magnitude buffed\n-TM perk should be overtuned at low levels\n-Grim Potion shows cooldown remaining\n-You will start a new run right away if you resume while reclaiming\n-Manual Cloud Save now has a 5 min cooldown\n\nBug Fixes\n-In Limbo, it shows perks from prior character\n-Bugs with timeshard chest spawn rate\n-Timeshards while idle display properly\n-Level 3 perks not showing correct text\n-Market shows gems not gold\n-Level up time shows decimals\n-Chest graphic off center\n-Fixed Research Manual indicator with Overachiever\n-Cooldown on cloud saving saves persists through reopening the game"
    },
    {
      "date": "2021-08-25T20:32:29.568Z",
      "displayDate": "August 25, 2021",
      "body": "v0.8.2\nLots of backend / developer changes this build!\n\nChanges\n-Can Tap on the loading screen to open up the play store when needing to upgrade versions\n-When Awakening/Abandoning, remove all active runes\n-Player ID included in various crash reports\n-Add note to tree center about exclusive nodes\n-Implemented weekly rolling cloud save backups\n-Get crash screen if an error occurs during loading\n-Purchased exclusive nodes to be a different color\n-Indicator when can Awaken\n-Voltaic Swords Ele Affinity perk changed to increased velocity\n-Gem and Timeshards Troves: you now can find a fixed number per day, and view progress on gems and timeshards items\n\nBug Fixes\n-Fixed a bug resulting in wrong resource amounts\n-Fixed bugs with new game and cloud save/load items\n-Got wild XP after idling\n-Bugs with customer service features\n-Bag in a bag bug\n-Not confirming tree points results in losing them"
    },
    {
      "date": "2021-08-31T19:53:49.525Z",
      "displayDate": "August 31, 2021",
      "body": "v0.9.0\nHighlights\n-All Perks have been revised!\n-Revised how Mobs keep distance - it should look more natural now!\n-Many bugs squashed!\n\nGameplay\n-Overhaul of all Perks\n-Fox Totem nerfed to only reclaim 60% power\n-Difficulty scaling balanced (20% more difficult at Level 10)\n-Revised how Mobs keep distance\n-Lowered Totem cooldown\n-2 Free Die each Awakening (up from 1)\n-Magic Die guarantee different options\n-Preparation grants 2 Spell Perks now\n-2nd Copy of spells unlocked after 1st Awakening\n-End raised to Awakening Rank 6\n\nUI / Backend\n-Awakening is now more clear that you need to reach Wizard/Staff Level to Awaken\n-New Totem Pouch and Jagged Totem help info\n-When can awaken, don't give perk options\n-Consistent with Chest / Trove language\n-Auto-Cloud will disable upon a crash\n-Anti magic-die save scumming measures\n\nFixes\n-Patched Magic Die Exploit\n-Souls for the current run will now count for enchantment\n-Fixed Thick Headed not re-activating\n-Fixed Transient Bonus icons not appearing in the right spot\n-Players missing mirrors should receive them\n-Fixed Bugs with version migration\n-Fixed Spirit Totem visual bug\n-Fixed Buttons with costs overriding the button interactable setting (e.g., respec button)\n-Fixed a bug with destroying empty bags\n-Destroy All Empty won't destroy the Runic Utility Bag\n-Fixed Combat Totem Proc funkiness\n-Fixed bug related to eye of vision bonus and offline gains\n-Fixed bug with Grim Potion cooldown timer"
    },
    {
      "date": "2021-09-03T01:54:53.553Z",
      "displayDate": "September 2, 2021",
      "body": "v0.9.2\nHighlights\n-The Totem system has been totally revised!\n-The Codex is here!\n\nGameplay\n-The Wizard is now on the same visible layer as enemies\n-Value Pack contents revised\n-Perk Selections to be pulled evenly from spell options\n-Jagged Totem cost fixed at 300 gems\n-Runes and Mobs now unlock based on Awakening\n\nFixes\n-Fixed Shard Bolter perk\n-Afterburner description\n-Health to show always as current / max\n-Remnant Eye of Vision for players with Dreamcatcher\n-Era Achievement % is 0\n-Temp status icons showing at side\n-Fight and Flight effect persisting through load\n-Misc Bugs"
    },
    {
      "date": "2021-09-03T14:47:06.040Z",
      "displayDate": "September 3, 2021",
      "body": "v0.9.3\nHighlights\n-Bugfix build!\n\nFixes\n-Make status fiend icon last 250 ms\n-Can add/remove items from the Codex\n-Totem average wait time funky\n-Moving things into codex caused issues\n-Perk selection logic bug\n-Totem roll seed not persisting\n-Crash upon load"
    },
    {
      "date": "2021-09-04T19:21:22.805Z",
      "displayDate": "September 4, 2021",
      "body": "v0.9.4\nHighlights\n-6 New Keystones added!\n-The Memory Tree has been slightly revised!\n\nUI / Backend\n-Can now send players gifts via the cloud\n-New Regeneration rune icon\n-Can now Restore Purchases after reseting the game\n-Spell Range values arfe now in meters\n-Revised most Keystone icons\n\nFixes\n-Fixed time in current awakening stat display\n-Fixed Owl description\n-Fixed a bug crashing the game on load"
    },
    {
      "date": "2021-09-06T16:59:29.563Z",
      "displayDate": "September 6, 2021",
      "body": "v0.9.6\nHighlights\n-Bugfix and tweak build!\n-Also added 3 new Rune types!\n\nChanges\n-Better FX for polishing jagged totems\n-Changed to 1 free Magic Die per Awakening (subject to change)\n-Reclaiming is now x3 slower\n-Added a Note about Kindling\n-Obliteration threshold changed to 95%, and gives x2 souls\n-Better FX when using Obliteration\n\nFixes\n-Elemental Neutrality bugged\n-Golden Envy icon bugged\n-Status Frenzy status icon synced up with the effect\n-Last Stand Q4 Heal 100%\n-Timeshards + Ad Bonus bug\n-Fight and Flight bugged when using multiple copies\n-Grim Potion begin dodged by Acrobatics\n-Orb of Power in shop\n-Still have benefit from Keystones before update\n-Runic Archives crashing the game\n-Runic Archives not updating right away\n-Totem level not always saving\n-Poison Droplets dealing massive damage\n-Fixed wizard not always be in the right visual layer\n-Fixed a bug with the Spider Totem\n-Fixed bug with some legacy code"
    },
    {
      "date": "2021-09-06T22:43:01.489Z",
      "displayDate": "September 6, 2021",
      "body": "v1.0.1\nHighlights\n-Mounts are now live!\n-Open Beta is right around the corner!"
    },
    {
      "date": "2021-09-07T11:17:05.404Z",
      "displayDate": "September 7, 2021",
      "body": "v1.0.2\n-Bugfix build!"
    },
    {
      "date": "2021-09-08T14:40:39.832Z",
      "displayDate": "September 8, 2021",
      "body": "Patch notes for new builds will be posted when the build is deployed to Closed Beta.  It will typically take about 1 hr from that point for the build to pass through review and become available for download. After being found relatively bug-free, a successful build will be deployed to Open Beta in the following hrs, or in the case of a large patch, after a day or two."
    },
    {
      "date": "2021-09-08T14:40:43.965Z",
      "displayDate": "September 8, 2021",
      "body": "TopCog pinned a message to this channel. See all pinned messages."
    },
    {
      "date": "2021-09-08T14:42:59.652Z",
      "displayDate": "September 8, 2021",
      "body": "v1.0.3\nHighlights\n-Bugfix and tweak build!\n\nChanges\n-Haggard Witch now gives Frenzy and Tough for 1 s\n-Crab Totem no longer works on bosses\n-Various minor visual improvements\n\nFixes\n-The Player starting on a Pillow!\n-Grim Potion crashing the game\n-Orb of Power item not working\n-Bug with Ionic Charger perk\n-Ad Bonus timer showing negative value\n-Mount items not refreshing the button on activation\n-Tree node icons being the wrong color after respecing\n-Perk choices not changing properly\n-Fixed bug with Thick Headed not reactivating"
    },
    {
      "date": "2021-09-08T19:17:16.460Z",
      "displayDate": "September 8, 2021",
      "body": "v1.0.4\nHighlights\n-A new class has been added to the game: the Elemental Master! Unlock them by reaching Awakening Rank 5!\n\nChanges\n-There are now Wizard Portraits when choosing your class in Limbo\n-Spellbook graphics have been revised to match the class spells\n-Toxic Cloud's transparency now scales with size\n-Difficulty scaling into higher waves increased a bit\n\nFixes\n-Toxic Cloud increased size perk was not increasing the hitbox size\n-Fixed a bug with indicators on bags\n-Acrobatics was not disabling when respecing\n-Acrobatics icon is now properly synced up with the effect"
    },
    {
      "date": "2021-09-10T12:28:56.839Z",
      "displayDate": "September 10, 2021",
      "body": "v1.0.5-11\nHighlights\n-The Trait system is live! Starting from the 4th Awakening, you will be able to choose a Trait in Limbo.\n-The Lantern of Recall item has been added!\n-Added options to link your account to Google and Facebook!\n\nChanges\n-The Obelisk Shard now shows time to finish Reclaiming\n-The game's performance has been increased a bit!\n\nFixes\n-Fixed many issues related to temporary status icons (e.g., totems and keystone icons)\n-Fixed issues related to some indicators (Garry and Great Mirror)\n-Fixed issue with the Grim Potion\n-FIxed ranged description for Fleet Footed\n-Improved Strange Wasp movement when close to the Wizard\n-Achievements window will update right away when claiming an achievement\n-Reclamation time while offline fixed (was too fast)\n-Fixed bug with Haggard Witches\n-Fixed bug with enemy projectiles sometimes dealing the wrong amount of damage\n-Fixed with blank Player ID\n-Extended replicator perk\n-Crashing the game also stops game-time"
    },
    {
      "date": "2021-09-14T20:24:32.200Z",
      "displayDate": "September 14, 2021",
      "body": "v1.0.12-14\nHighlights\n-An incremental build, with many random things!\n\nContent\n-Push Notifications!\n-Detailed Options!\n\nChanges\n-Better effects in the Chronozone!\n-Many achievement requirements increased\n-Timeshard Trove contents increased to 60 min worth\n-New icons for Frail and Cripple\n-New icons for many items!\n-Mobs will gain a movement speed boost after having been alive for 40 seconds\n-Memory Tree should start with central node selected\n\nFixes\n-Will properly track if Facebook has been linked\n-Will auto-load the cloud save if you link your device to an account with a more advanced save\n-Fixed new game bug with traits\n-Afterburner perk wording revised\n-Put rogue AchievementsEra back in trophy case\n-Crusaders no longer immune to knockback\n-Fixed bug with Status Frenzy not proccing\n-Fixed Garry cooldown not increasing\n-Fixed some spelling errors\n-Fixed bugs with timekeeping system"
    },
    {
      "date": "2021-09-16T02:47:14.322Z",
      "displayDate": "September 15, 2021",
      "body": "v1.0.16 (Open Beta)\nHighlights\n-There is a new use for Gems: Rings give small permanent bonuses, and can now be purchased in the Market!\n-You can now get Gems using the Offerwall feature, also in the Market!\n-Totally revised how bonuses are described: they now use More (multiplicative) vs Increased (additive) language\n\nChanges\n-Rings and Mounts now have separate item-containers in the Market\n-Mounts have better looking icons\n-Preparation will now give 2 random perks when it is selected, and you will lose 2 random perks when you lose it\n-Can now select Preparation as a starting Trait\n-Can no longer select Obliteration as a starting Trait\n-Retribution Trait buffed to 30%\n-Golden Cloud animation tweaked and it has a shadow now\n-Improved when numbers show decimal places or not\n-Added Bonus Calculations stopgap help item\n\nFixes\n-Fixed description of Elemental Neutrality\n-Fixed Lantern icon showing after exiting Limbo\n-Fixed Lantern not resetting when enchanting\n-Fixed Offline Reclaiming being too fast\n-Fixed a bug with Acrobatics and Respeccing"
    },
    {
      "date": "2021-09-21T21:24:11.416Z",
      "displayDate": "September 21, 2021",
      "body": "v1.0.17\nHighlights\n-Many random tweaks, improvements, and fixes!\n-New Achievements hopefully coming in next update!\n\nNew\n-Option to set default zoom level of the battlefield\n-Added a note explaining Elemental Status Effects\n\nChanges\n-Revised Mounted Unit movement\n-Tuned mob hitboxes to be more accurate\n-Revised Chillbloom movement art\n-Tweaked Boss armor\n-The Rune Drop Table will cycle if you are offline for more than an hr\n-\"Movement Speed\" language streamlined\n-Changed name of Elemental Affinity perk to Status Affinity\n\nFixes\n-Fixed the Lantern!\n-Probable fix for multiple issues with Enchanting / Reclaiming\n-Fixed issues with the Evasion Rune being buggy when using with Runic Utility Bag\n-Fixed issues with Fight and Flight\n-Fixed description of Elemental Empowerment (it was showing too high of damage)\n-Fixed bug with Feather Duster not changing perks\n-Fixed a critical bug"
    },
    {
      "date": "2021-09-25T12:51:14.663Z",
      "displayDate": "September 25, 2021",
      "body": "v1.0.20\nHighlights\n-There are 10 new, special Achievements! Yahoo!\n\nChanges\n-When using many Runes, the UI will now collapse them together\n-High quality Evasion Runes buffed\n-Backend balance for Achievements has been adjust: the result is that later waves will be harder sooner\n-Bonus per achievement increased to x1.02 Timeshards\n-Kindling Timeshard requirements has been tuned\n-Resource items will no longer disappear when their count reaches 0\n-Runic Archives renamed to Book of Runic Futuresight\n-Repulsion rune push effect is now capped\n\nFixes\n-Fixed Reclaiming at very high enchant levels\n-Fixed using Jagged Totem without the Totem Pouch\n-Fixed Preparation not choosing perks randomly\n-Fixed bug with respeccing while having preparation\n-Fixed bug with Reset Game + Dreamcatcher\n-Fixed movement speed bonus not applying when using joystick control\n-Fixed Evasion Rune description\n-Fixed Fight and Flight description\n-Clarified Toxic Bolt Patience wording"
    },
    {
      "date": "2021-09-27T20:36:14.921Z",
      "displayDate": "September 27, 2021",
      "body": "v1.0.21\nHighlights\n-Bugfix and tweak update - lots of random improvements!\n\nChanges\n-Winter's Coil art has been revised a bit\n-Bloated Butcher's movement has been revised\n-The Memory Tree scrolling UI now has some momentum\n-The Bestiary now has nice looking portraits for each enemy!\n-Added a note when you don't have any mirrors and are trying to purchase a node\n-You will not lose a run-count on Runes if you Enchant within 20 seconds of starting a new run\n-If you collect the Lantern while in the Chronozone, gain Power instead of Souls\n-Souls and Gold now visibly fly out of the Lantern\n-FX when activating Lantern and Polishing Totems\n-Added a note about what Kindling does (enter next Era)\n\nFixes\n-Fixed (and rolled back) the infinite Totem bug\n-Fixed a bug with Limbo and Preparation\n-Fixed the icon used for Locked things being inconsistent\n-Great Mirror properly says that you will gain +0 mirrors when at max awakening\n-Fixed a bug unlikely to occur outside of development testing\n-Memory of Souls now uses souls symbol\n-Fixed Lantern help entry\n-Revised No Time to Think description to be more clear"
    },
    {
      "date": "2021-09-28T02:50:51.989Z",
      "displayDate": "September 27, 2021",
      "body": "v1.0.24\nHighlights\n-New Tundra terrain! Encounter it on every other Awakening!\n-Critical bugfix for the totems-gone bug!\n-There is a new Damage Numbers option!\n-Totems now have a purple outline, and are animated when procced! Nice!\n\nChanges\n-The Forest terrain has been revised a bit\n-Improved detailed options icon\n-There is a simple FX when respeccing, and when awakening\n\nFixes\n-Golden Cloud mount is now positioning in the correct sprite layer\n-Arcanist 4 has the proper requirement now"
    },
    {
      "date": "2021-10-04T14:31:27.972Z",
      "displayDate": "October 4, 2021",
      "body": "v1.0.25\nHighlights\n-The Fate system is live! Yahoo!\n-Tons of bug fixes to boot!\n\nChanges\n- Improved Chronosphere animation\n\nFixes\n-You can properly activate Max level Totems\n-Fixed the Level Up notification being buggy\n-Fixed a bug with Treasure Hunter Rune and/or Totems that can lock the game\n-Fixed a bug related to Skeletal Trooper that can crash the game\n-Fixed minor visual issue with Tundra backdrop\nFixed a bug with awakening and the lantern\n-Fixed movement speed bonus given by Fight and Flight\n-Fixed bugs with Indicators\n-Unified Timeshard bonus description for achievements\n-Fixed Camera movement when Awakening\n-Fixed Spider Totem animation\n-Fixed a balance bug related to the Ad Bonus (later waves will be harder)\n-Alpha players will receive extra Totems as compensation for bugs"
    },
    {
      "date": "2021-10-13T12:21:35.000Z",
      "displayDate": "October 13, 2021",
      "body": "v1.0.27\nHighlights\n-New Bag Configuration options!\n-New Changelog item!\n-Various improvements and bugfixes!\n\nNew\n-New sub-item for Consumables in the Shop!\n-New x10 versions of some consumable items!\n\nChanges\n-Troves and Totems are now in the same visual layer as characters!\n-There is now a visual FX when mobs are healed!\n-Totems have new icons!\n-The graphics for Toxic Cloud have been revised!\n-Casting enemies must now be within or near the battlefield to cast (as opposed to infinite range before)\n-Bestiary partially expanded with Era 2 enemies\n\nFixes\n-Fixed description of unowned Totems\n-Fixed a bug with summoned enemies\n-Fixed a memory leak\n-Fixed description of Elemental Overload for Fiery Deluge\n-Fixed Offline Gains not being factored into the display of offline XP rate"
    },
    {
      "date": "2021-10-14T14:14:37.845Z",
      "displayDate": "October 14, 2021",
      "body": "v1.0.28\n-Fixed a bug causing the Bestiary to constantly be reset!  Unfortunately the fix isn't retroactive - beta growing pains!"
    },
    {
      "date": "2021-10-20T13:42:52.596Z",
      "displayDate": "October 20, 2021",
      "body": "v1.0.33\nHighlights\n-New Splash Screen and App Icon! Yahoo!\n-New Trail cosmetics! These are visual only items that do not impact gameplay (as of yet).\n-Fixed MANY bugs!\n\nNew\n-New Detailed Options for configuring the Main Pack!\n-Overachiever is now toggleable!\n-Get some Gems the first time you choose a Username!\n\nChanges\n-Toxic Spray graphical revision\n-Split-Screen (and arbitrary screen resizing) now supported!\n-Ability to Try cosmetics before purchasing them!\n\nFixes\n-Fixed minor visual issue with Tundra terrain\n-Fixed visual issue with fan the flames\n-Fixed tapping the X in the memory tree\n-Fixed critical bug with achievements for early version players\n-Fixed but with UI that could crash the game\n-Fixed: attempting to cloud save before an auto-cloud save occurs would crash the game\n-Fixed: tapping the Great Mirror with a Fate selected in Limbo crashes the game\n-Fixed bug with Jagged Totem item being located in the Market, and the shop-jagged totem being missing\n-Loading a save from pre v1.0.0 will now start a new game instead of crashing\n-Prevent idle gains while on the Terms of Service screen\n-Fixed spurious Offerwall failed message\n-Fixed a bug with the Cascade description\n-Fixed behavior of Cascade perk\n-Fixed a bug with Falling Skies that could crash the game\n-Fixed Era 2 spells showing up in the Codex before Era 2"
    },
    {
      "date": "2021-10-21T15:58:08.802Z",
      "displayDate": "October 21, 2021",
      "body": "v1.0.34\n-Hotfix update! Fixes a few significant bugs that were recently introduced"
    },
    {
      "date": "2021-10-23T01:22:36.272Z",
      "displayDate": "October 22, 2021",
      "body": "v1.0.35\n-Another critical bugfix update!\n-Fixed Research: you can now level up past level 1!\n-Fixed bug with Ancient Tome\n-Fixed bug with the Lantern\n-Fixed bug with Runes\n-Fixed Trophy Case issues\n-Backend work for Era 2 is underway - some more bugs are possible as the new content get added behind the scenes!"
    },
    {
      "date": "2021-10-23T13:50:05.054Z",
      "displayDate": "October 23, 2021",
      "body": "v1.0.36\n...you guessed it, another bugfix update!"
    },
    {
      "date": "2021-11-01T11:18:25.879Z",
      "displayDate": "November 1, 2021",
      "body": "v1.0.38\nHighlights\n-Various balance changes!\n-Various minor improvements\n-Many bug fixes!\n-Era 2 development is well under way, and will be ready...soon!\n\nBalance\n-Offline XP rate increased to 20%\n-Ionic Charger now passes through enemies, travels in a more limited but predictable manner, and damage is reduced\n-Toxic Bolt Patience reworded and buffed\n-Static Arc Status Affinity no longer has a cap on the number of sparks\n-Static Arc Elemental Overload deals extra damage\n-Static Arc Slayer now also grants a damage bonus upon killing an enemy\n-Toxic Cloud Slayer now has a cooldown\n-Increased the bonus and removed the cooldown for Magical Absorption, and it triggers from projectiles instead of just spells\n-Memory of Sleep bonuses increased\n\nTweaks\n-Memory Tree shows sum of bonuses\n-The Staff now shows Level X / Y on the window bar\n-Changed font of \"Loading...\"\n-Revised Fate icons\n-The Chronosphere now says \"Era X\" on the window bar\n\nFixes\n-Fixed Toxic Spray Ricochet Perk\n-Fixed issues with Falling Skies Status Affinity\n-Fixed Enemy arrows not proccing certain wizard on-hit effects\n-Fixed missing Book of Fate for some players\n-Fixed a bug that caused items to get stacked\n-Fixed Circle of Choice\n-Fixed a bug with enchanting cost balance: Enchanting costs more at higher levels\n-Fixed description of Static Arc Status Affinity\n-Commas now show up properly in big integer numbers"
    },
    {
      "date": "2021-11-05T21:06:36.968Z",
      "displayDate": "November 5, 2021",
      "body": "v1.0.39\nHighlights\n-Various icons have been improved!\n-Many bugs fixed!\n-Era 2 is almost ready! Yahoo!\n\nBalance\n-Toxic Bolt splinter damage reduction decreased to 25% Less\n-Toxic Bolt base damage decreased by 25%\n-Magical Absorption bonus reduced a bit\n\nQoL\n-Elemental Empowerment now shows a decimal in the DPS\n-New graphic for node selector on memory tree!\n-New icons for Magic Die, Dice Pack, and Respec Pack!!\n-New Spellbook for the Elementalist\n\nFixes\n-Fixed bug with items getting stacked\n-Fixed balance bug introduced in last build\n-Fixed abandoning before unlocking the Lantern would crash the game\n-Fixed a bug where upgrading from an old version of the game could crash the game\n-Fixed polishing a Totem before having the Totem Pouch crashes the game\n-Fixed a bug with resizing the main pack which could crash the game"
    },
    {
      "date": "2021-11-18T13:32:37.572Z",
      "displayDate": "November 18, 2021",
      "body": "v2.0.6\nHighlights\n-Era 2 is Here! Yahoo!\n\nEra 2 Content\n-2 New Wizards!\n-8 New Spells!\n-2 New Terrains!\n-6 New Enemies!\n-35 New Achievements!\n-6 New Runes!\n-8 New Traits!\n-4 New Fates!\n-The Spirit Engine! Use it to accelerate the early game.\n-The Star of Wisdom! Use it to permanently upgrade your Staff.\n-The Cloak of the Time Master! Use it to customize which Spells are in the Spellbook.\n-The Great Prism! Use it to unlock Memory Tree Stage 2!\n-The Battle Trance Hymnal (actually available in Era 1)! Use it to adjust auto-movement behavior.\n\nChanges\n-Revised graphics for the Firelight Maven and Elemental Master!\n-Value bundle now includes 250 gems\n-Falling Skies Cascade perk threshold reduced\n\nUI / QoL\n-Confirmation options for respeccing, rerolling, and spending gems!\n-Option to tap any item to exit the Chronozone\n-Can enable / disable the Lantern via its settings page\n-Research Manual shows your total gold\n-\"Less Skill Speed\" to \"Slower Skill Speed\"\n-Overachiever option now says Enabled / Disabled\n-Added note to Bag of Bags\n-Added a note in Limbo that wizard choice is not permanent\n-Get 5 random runes when first unlocking the Rune Bag\n-Will not get Timeshards until you have the Chronosphere\n-Shop IAP prices displayed in your local currency\n\nFixes\n-Fixed bugs with the Prologue (not starting with any souls)\n-Fixed Power Gains in Chronozone not always showing up\n-Fixed opening multiple settings windows (mostly)\n-Fixed bag in bag in codex goofiness\n-Fixed critical bug with temp status icons\n-Fixed oddity with detailed options window size\n-Fixed bug with Memory Tree respec\n-Fixed getting huge souls on first run sometimes\n-Fixed the free respec timer resetting after using a respec token\n\nHope you enjoy it - Cheers!"
    },
    {
      "date": "2021-11-20T15:27:54.018Z",
      "displayDate": "November 20, 2021",
      "body": "v2.0.7\nHighlights\n-Fixed many bugs! Thanks to everyone playing, and especially to those giving feedback!\n\nChanges\n-Enemy hp scaling increased a bit after wave 100 - intention is to bring things into balance with an expectation of players using better strategy later in the game!\n-Revised reclaiming language to say \"1% of current total Power\"\n\nFixes\n-Fixed ToS link\n-Fixed Equilibrium reward description\n-Fixed Ring of Choice not working with Star of Wisdom\n-Fixed bug with Eye of Vision\n-Fixed Quickening Q3 bonus value\n-The indicator will now go away when you tap the Cloak\n-Added back Detailed Options for players for whom it was nuked\n-Fixed the Equilibrium Fate\n-Fixed missing achievements for some players\n-Fixed missing items and crash on kindling for some early players\n-Fixed shop items crashing the game if there is no internet connection\n-Fixed a rare crash when kindling"
    },
    {
      "date": "2021-11-23T17:07:24.874Z",
      "displayDate": "November 23, 2021",
      "body": "v2.1.1\nHighlights\n-Most Gem Chests in the Market now include a Ring!\n-View the total of all of your bonuses in the Statistics Item!\n-Many various QoL improvements!\n-Squashed a boatload of bugs!\n\nNew\n-3 New Rings, available from Era1!\n-These 3 Rings are included as a bonus with the Packed, Exquisite, and Overflowing Gem Chests!\n-If you had purchased any of these Gem Chests before, you will receive the corresponding Ring(s) for free!\n-Trophy Case shows summary Achievement bonuses!\n-The Statistics item in the Options now has a second page details your current bonuses!\n\nChanges\n-Added a confirmation dialogue when choosing a Fate in Limbo\n-Added a popup note if you are unable to change the Main Pack height\n-You can now Focus if you have 40 Mirrors, counting ones that are in use in the Tree\n-Q4 last stand now inflicts silence and slow for 15 seconds instead of just 5\n-The Jewelry Box is now resizable\n-The Runic Utility Bag size increased to 7x4 (short-term measure, better system coming in future)\n-Fixed a bug with orphaned, self-referencing items\n\nFixes\n-Fixed a typo in an Ionic Charger perk\n-Improved the hitbox size when windows have both a help and settings\n-Fixed the Chronosphere not showing time to kindle anymore\n-Fixed a bug with the Cloak crashing the game\n-Fixed the Spirit Engine upgrades not lighting up right\n-Fixed Ice Beam perk missing name\n-Fixed Star of Wisdom extra perk level not being applied right away\n-If you choose a perk that has a max level of 1 with Star of Wisdom, it won't waste the extra level\n-Fixed Ancient Tome in Era 1\n-Shop Items that cost Gems show every digit now\n-Rings can be moved (back) into the Jewelry Box"
    },
    {
      "date": "2021-11-25T01:03:06.167Z",
      "displayDate": "November 24, 2021",
      "body": "v2.1.5\nHighlights\n-Bugfix release!\n-Also the first release for the Amazon Appstore!\n\nChanges\n-Firey Beams \"pushing\" reduced by 40%\n-Removed q5 time warp (it may return later)\n\nFixes\n-Fixed Runic Loop crashing the game\n-Fixed bugs with respeccing cost\n-Fixed bugs with respeccing Preparation\n-Fixed bug with dynamic props not going away when they should\n-Tree bonuses now properly show on the statistics item\n-Can no longer Focus Great Prism to Level 2 in Era 2\n-Respeccing when Focusing now results in the correct number of mirrors\n-Better support for Landscape orientation"
    },
    {
      "date": "2021-11-29T15:05:33.959Z",
      "displayDate": "November 29, 2021",
      "body": "v2.1.6\nHighlights\n-Another Bugfix release!\n\nChanges\n-The big connections in the Stage 2 Tree are no longer exclusive\n\nFixes\n-Fixed balance post wave 100\n-Fixed bugs with the Spirit Engine Respec\n-Fixed Respeccing Preparation: it was only removing 1 spell perk before\n-Fixed Era 3 Chronosphere indicator not going away\n-Using the Feather Duster will no longer randomize time cloak choices\n-Fixed bug with random runes always selecting broken Ultimate Power Runes\n-Fixed bug allowing items to be added to some Limbo items\n-Fixed a bug where Limbo + Cloak can get into a stuck state\n-Fixed typo with Ring of Reclaiming Light desc"
    },
    {
      "date": "2021-12-03T12:59:24.991Z",
      "displayDate": "December 3, 2021",
      "body": "v2.1.8-9\nFixes\n-Fixed bug with the staff that was crashing the game for some\n-Fixed Ultimate Power Runes less than Q5 still existing\n-Fixed Shard Bolter Elemental Overload\n-Fixed Toxic Bolt crashing the game sometimes\n-Fixed Time Cloak indicator not going way in Era 1\n-Potential fix for push notification appearing while the app is open\n-Fixed severe bug with offline xp gains sometimes turning your XP negative"
    },
    {
      "date": "2021-12-18T17:04:44.920Z",
      "displayDate": "December 18, 2021",
      "body": "v2.3.1\nHighlights\n-This build includes support for pairing mobile with Steam for seamless (hopefully) cross platform play!\n\nTweaks\n-Timeshards required to Kindle reduced by 10%\n-Awakening at max rank grants 24 hrs worth of Timeshards\n-Max Timeshard Troves per day increased from 20 to 24\n-Added Timeshard bonus to bonus summary in Trophy Case\n-Reduced the amount of data that is downloaded\n-Owning the dreamcatcher will prevent ads from downloading\n\nFixes\n-Fixed push notification text on iOS\n\nYahoo!"
    },
    {
      "date": "2021-12-18T17:05:09.867Z",
      "displayDate": "December 18, 2021",
      "body": "------------\nv2.3.2\nTweaks\n-Increased the range at which the Glutton explosion damages players!\n\nFixes\n-Fixed a bug with Gluttons!"
    },
    {
      "date": "2021-12-20T14:24:00.299Z",
      "displayDate": "December 20, 2021",
      "body": "v2.3.4\n-Fixed a bug where some perks were dealing way too much damage!"
    },
    {
      "date": "2021-12-20T22:11:07.199Z",
      "displayDate": "December 20, 2021",
      "body": "v2.3.6\n-Fixed some backend issues which could rarely cause strange issues (e.g., Gluttons not dying)\n-Fixed bugs with Linking and Steam Pairing\n-Doing a Cloud Load after being Paired will force a sync with the cloud\n-Revised linking items language to be more clear\n-The Detailed Options item can now be moved freely (Steam fix)"
    },
    {
      "date": "2021-12-21T06:00:30.085Z",
      "displayDate": "December 21, 2021",
      "body": "v2.3.7\n-Yet again, fixed issues with Steam Pairing!"
    },
    {
      "date": "2021-12-25T16:31:25.521Z",
      "displayDate": "December 25, 2021",
      "body": "v2.3.12\nHighlights\n-Many bug fixes and minor tweaks!\n\nChanges\n-Bloated Butchers don't shoot fireballs during the early stages of a run anymore!\n-Having Elemental Inversion will alter the Text of relevant Perks\n-Runeddicted can now also be obtained by having 50 or more Staged Runes\n-Added some support for playing on Steam and switching between two computers\n\nFixes\n-Fixed bug with gluttons and Status Fiend and Elemental Neutrality\n-Fixed bug where going from 2 to 1 of the same Trait would sometimes cause it to stop functioning\n-Fixed Magic Die typo\n-Fixed crash if you attempted to pair on steam before mobile\n-Fixed issue where the game would not auto cloud-save upon the first time launching the game\n-Fixed critical bug related to buttons\n-Fixed bugs with some Limbo items\n-Fixed bug with Slow and Steady crashing the game\n-Fixed a rare bug where awakening could crash the game\n-Updated backend SDKs"
    },
    {
      "date": "2021-12-29T12:18:27.161Z",
      "displayDate": "December 29, 2021",
      "body": "v2.4.1\nNew\n-Special gift of 100 gems for all players!\n-Support for the Russian Language! Yahoo!\n-A new Detailed Option to change how bonuses are displayed (More / Increased vs x / +)\n-Option to display a progress bar over the Research Manual, showing progress of most advanced research\n-(Steam) Confirmation to Quit\n-(Steam) Use the - and = keys to zoom in and out!\n\nChanges\n-Bosses are harder at higher waves now\n-Fox Totem now gives +1 status level for each 6 Levels on your Staff\n-Troves appear less frequently the more you collect in a run, starting with the 21st Trove in a run\n-Tap Music / Sound options to toggle them (don't need to press Toggle anymore)\n-Added a note to Magic Die description\n-Some durations will no longer show decimal places\n-Overcharge bonus reduced to 20%\n-(Steam) The Scroll Wheel only zooms when mouse is over the game window\n\nFixes\n-Fixed issue related to buttons sometimes not registering clicks/taps\n-Fixed a bug with Ice Nova appearing at the start of each beam as opposed to the end\n-Fixed a visual bug with purchasing Mounts\n-Fixed an issue with syncing between two computers running Steam\n-Fixed bug if you get to Level 10 before unlocking the Great Mirror\n-Fixed a bug with IAP\n-Fixed minor visual bug with IAP Shop Items\n-Fixed <RI.Hid> bugs crashing the game (steam)\n-Fixed rare crash that can occur with a non-standard sized main pack\n-Fixed Ultimate Power regen and kill ability\n-Gigantism fixed again\n-Fixed bug preventing Steam from auto-cloud saving\n-Toggling Elemental Inversion will update perk descriptions\n-Elemental Neutrality now shows it's bonus in the Stats page\n-Fixed rare bug with Master Reclaimer\n-Added some safeguards to improve game stability"
    },
    {
      "date": "2022-01-01T02:49:31.092Z",
      "displayDate": "December 31, 2021",
      "body": "v2.4.3\n-Linking Accounts to Apple and Google has been vastly improved!\n-The previous change to Troves has been removed. Instead: after collecting 10 Rune Troves in a single Run, the chance to get Rune Troves will decrease.\n-Many fixes and improvements for the Russian language!\n-Fixed various bugs introduced in English due to localization\n-Fixed double master reclaimer icons\n-Fixed description for Ionic Charger Elemental Overload\n-Fixed description for Ionic Charger Status Affinity\n-The Language option is movable\n-(Steam) Main view and Mirror view scroll wheel linked\n-(Steam) Fixed an issue with not being able to exit sleeping easily"
    },
    {
      "date": "2022-01-04T21:15:31.161Z",
      "displayDate": "January 4, 2022",
      "body": "v2.4.4\nChanges\n-The Lantern has been improved! After being active for an hr, it will enter Offline Mode, and accumulate Souls and Gold at the Offline Rate!\n-Fates will now reward 24 hr of Timeshards after any completion after the first, and the first completion will never give 24 hr timeshards\n-Fire Stream: +10% Damage\n-Static Arc: +15% Damage\n-Toxic Spray: +10% Damage\n-FireFly Luminous Aura perk: Acceleration frequency increased by +20%\n-Added time this awakening to Statistics\n-Activating the Lantern in the Chronozone now causes the resources to visually fly out of it\n\nFixes\n-Many backend updates\n-Improved game stability in case of errors\n-(Steam) Save and Exit window will now always be on top\n-Fixed description of Regeneration Rune\n-Fixed rare bugs with Prologue\n-Fixed bugs with Grim Potion cooldown\n-Improved some of the Spellbook UI in the early game\n-Fixed issue where username would end up blank after steam/mobile pairing\n-Fixed a bug with Steam Pairing not registering on Mobile the first time you did it"
    },
    {
      "date": "2022-01-17T12:15:37.427Z",
      "displayDate": "January 17, 2022",
      "body": "v2.5.1\nNew\n-The Br-Portuguese, French, German, and Spanish translations are now supported! These are fan-translations and are only partially complete.\n-New detailed option for compact Runes display (will improve performance when using huge amounts of Runes)\n\nChanges\n-Bosses at higher Waves are easier!\n-Completing Fates will now only yield the Timeshard reward if you are at max Awakening Rank\n-Lowered the chance of getting Rune Troves when the Lantern is in Offline Mode\n-The Runic Loop can now find up to 10 Runes while offline\n-Active and Staged Runes take up less screen space by default\n-From now on, Steam Pairing will only sync saves when the mobile and steam game versions are compatible (first two digits are the same)\n-(iOS) Fullscreen is no longer required by the app - this should allow multi-tasking and make it resizeable on Mac M1"
    },
    {
      "date": "2022-01-17T12:15:43.044Z",
      "displayDate": "January 17, 2022",
      "body": ".\nFixes\n-Fixed a bug with the Lantern not giving the right amount of Gold\n-Fixed how the Hard Reset option interacted with Cloud Saves\n-Fixed a bug with wonky stuck Research Windows\n-Fixed a typo in with a Lightning Orb perk\n-Fixed a crash if you awaken of kindle under certain conditions\n-Fixed a rare crash with Eye of Vision\n-Fixed a bug with Grim Potion activation AGAIN\n-Fixed a bug when going between different versions of the game via pairing\n-Fixed a bug with attempting to link to Android / Google with no internet connection, or after a session timeout\n-Fixed a bug with the Offerwall, and the Offerwall will not initialize until you tap the item, reducing network usage and improving app startup time\n-Improved the FPS when using huge amounts of runes from the Runic Utilty Bag\n-You can no longer open duplicate settings windows for the same item\n-Many backend changes were made to improve the stability of the game\n-(Steam) Reduced the hitbox of the \"X\" to quit button\n-(Steam) Fixed more bugs related to plugging in controllers\n-(Steam) Capped the FPS to 60, which should fix out of control CPU usages for some players"
    },
    {
      "date": "2022-01-18T19:43:24.552Z",
      "displayDate": "January 18, 2022",
      "body": "v2.5.2 (iOS only)\nHighlights\n-This is a bugfix build, mainly aimed at fixing a critical bug on iOS!\n\nChanges\n-Encouragement and Vampirism description changed from \"Gain HP\" to \"Recover HP\"\n\nFixes\n-The indicator will now go away and stay away on the Eye of Vision\n-Turned off request for \"remote\" push notifications\n-Updated to Unity Web Request in the backend\n-Force a re-load if version mismatch is detected\n-Give note if syncing fails due to incompatibility\n-Prevent attempting to Link if not logged in\n-(steam) Fixed various controller related bugs"
    },
    {
      "date": "2022-01-23T00:54:52.947Z",
      "displayDate": "January 22, 2022",
      "body": "v2.6.0\nHighlights\nThe Star of Wisdom has been tweaked, a couple of new Options items, plus bugfixes and backend updates!\n\nNew and Changed\n-The Star of Wisdom now functions a bit differently, granting new Mana Stars and Radiant Stars. These changes were made to make it more clear how many Perk choices you had remaining, and whether or not they would be doubled!\n-New Game Credits item in options!\n-New Vault item in Options!  Try out the first code, \"TapWizard2\"! Most codes will be obtained directly from TopCog and will have an expiration.\n\n*Fixes\n-Fixed the Grim Potion...again!  We should call it the Zombie potion, because this bug can't be killed! Yet...\n-The way the game manages inputs was heavily changed. This should reduce a number of crashes occurring on iOS.\n-Upgraded to a new game engine version, which should improve overall game stability and performance.\n-And even more, other various backend revisions, which should reduce issues! The majority of users never experience a problem, but we want to get the number of bug-free players as close to 100% as possible!\n-(steam)Fixed issues which could occur when other Steam games were running."
    },
    {
      "date": "2022-01-23T00:54:58.615Z",
      "displayDate": "January 22, 2022",
      "body": "v2.6.3\nChanges\n-You won't get a Mana Star at your last level up that Awakening\n-The Research Manual will update the displayed Gold count each second"
    },
    {
      "date": "2022-01-23T00:55:03.212Z",
      "displayDate": "January 22, 2022",
      "body": "v2.6.4-5\n-Fixed bug introduced with Perk Fairy!\n-Fixed bug with Rune of Ultimate Power!\n-Fixed some backend issues with the new Input System!"
    },
    {
      "date": "2022-01-27T12:50:28.775Z",
      "displayDate": "January 27, 2022",
      "body": "v2.6.7 [Steam / Android / iOS]\nChanges\n-Gain 1 Rune from the Vase of Accumulation if you are offline for more than an hr!\n-New Detailed option to show HP as a percent\n-New Detailed Option to  hide Flying Resources\n-New Splash screen for mobile!\n-Cleaned up the splash screen on all platforms\n-(ios) Push Notifications are disabled on iOS for the time being\n\nFixes\n-(ios) Probable fix for the game getting stuck at loading and crashing randomly\n-Fixed a bug where the mirror tree sometimes wouldn't save properly\n-Fixed a bug with Enchanting while using the Lantern\n-Fixed a bug with multi-touch that could cause various issues\n-Fixed bug with dropping items onto full bags that the item is already in\n-Fixed bug with potential recursive bag configurations\n-Fixed an issue when multiple cloud flags were set at the same time\n-Fixed bug with Grim Potion (...)\n-Fixed an exploit\n-Improved app performance a bit\n-Made backend change to stop entity ID from incrementing to huge numbers\n-(android) The Offerwall is live again!\n-(steam) Fixed a problem with some sound cards"
    },
    {
      "date": "2022-01-27T14:17:05.932Z",
      "displayDate": "January 27, 2022",
      "body": "v2.6.8\nFixed bugs introduced in v2.6.7!"
    },
    {
      "date": "2022-01-28T15:46:58.302Z",
      "displayDate": "January 28, 2022",
      "body": "v2.6.9 [Steam / Android / iOS]\nCritical Bugfix"
    },
    {
      "date": "2022-02-01T17:57:07.088Z",
      "displayDate": "February 1, 2022",
      "body": "v2.7.2-4 [Steam / Android / iOS]\nChanges\n-Two New Music tracks have replaced the old music! More are on the way soon!\n-Starting in Era 2, Q5 Runes drop x2 as often\n-Obliteration and Elemental Neutrality can now be found as Limbo Traits\n-Perk Fairy will set an indicator on which Perks it selects\n\nFixes\n-Fixed Static Arc's Elemental Overload to properly fire +1 Arc!\n-Fixed Hide Flying Resources option!\n-Fixed issues with some corrupted save files!\n-Fixed languages being mixed up!\n-Fixed a few minor sdk issues\n-(Steam) Fixed bug with the camera zooming in and out too quickly\n\nBackend Optimizations\n-Optimized Mobs!\n-Optimized Runes!\n-Optimized Scenario!\n-Optimized Ice Beam and Fiery Beams!\n-Optimized memory footprint in other ways!\n-Yahoo!"
    },
    {
      "date": "2022-02-04T14:01:36.255Z",
      "displayDate": "February 4, 2022",
      "body": "v2.7.5-7 [Steam / Android / iOS]\nChanges\n-If you Awaken without having collected your Free Magic Die, you will get it anyway!\n-(mobile) Push Notifications are back!\n\nFixes\n-Music won't start up upon awakening if it is muted\n-Fixed a bug with Icy Amplification Perk\n-Fixed a bug with Traits that trigger \"when the wizard takes damage\""
    },
    {
      "date": "2022-02-12T21:15:04.627Z",
      "displayDate": "February 12, 2022",
      "body": "v2.8.0 [Steam beta / Android alpha]\nNew\n-A new music track was added, unlocked in Era 2!\n-There is a new Audio Options item! You can disable combat sounds and select what music track will play.\n-There is a new Formless Wizard graphic that appears when in Limbo, before you have chosen a Class!\n-(Steam) There is an audio option to mute the game when not in focus!\n-(Steam) Window title will say \"Lantern Active\" when applicable.\n-(Steam) Add a VSync detailed option. Disable VSync if your framerate is going too high!\n\nChanges\n-Terrains now cycle evenly between all possible terrains when at max awakening rank.\n-Revised the graphics for Lightning Orb a bit.\n-The Gem Reward for choosing a username increased to 40 gems!\n-The Class menu in Limbo was changed in size from 4x2 to 7x1.\n-Tuned logic for rune troves after collecting a ton in one run, to make Treasure Hunter runes less abusable.\n-The Feather Duster is no longer an \"Options\" item.\n\nFixes\n-(Android) Fixed Google Login!\n-Perk Fairy now properly puts an indicator on all Perks selected.\n-Fixed Perk Fairy putting indicators on the Staff that don't go away.\n-Fixed a bug with being unable to swap certain items.\n-The Vault item can now be moved back into Options.\n-(iOS) Fixed a bug preventing Push Notifications from triggering.\n\nBackend\n-Upgraded the backend engine to a new version\n-Upgraded a variety of backend components\n-Optimized the performance of cloud saving a bit\n-Put in safeguards to prevent certain network related issues"
    },
    {
      "date": "2022-02-14T18:11:22.002Z",
      "displayDate": "February 14, 2022",
      "body": "v2.8.1 [Steam / Android]\nNew\n-The Vase of Accumulation can now be upgraded to find more Runes while offline!\n\nChanges\n-Once in Era 2, if you don't have an Ultimate power Rune, you have a 1 in 100 chance to get one!\n-You will get more random rune types now!\n-The music will now fade in and out when changing music mode!\n-The graphics for the mounts have been revised!\n-You now cannot repeat a completed Fate unless you are max rank\n-A button now appears in the Research Manual to disable the Spirit Engine automatic research\n-Revised Runic Loop description and tweaked how it works a bit: it is now additive with the Vase\n\nFixes\n-(introduced in in v2.8.0) Fixed a bug with the music mode setting crashing the game when the music is muted\n-(introduced in in v2.8.0) Removed mute in background option on mobile\n-(introduced in in v2.8.0) Fixed a bug with the Time Cloak\n-Fixed a bug with enemy Shield status effect"
    },
    {
      "date": "2022-02-15T01:19:43.080Z",
      "displayDate": "February 14, 2022",
      "body": "v2.8.2 [Steam / Android]\nChanges\n-Offline Souls and Gold gain doubled!\n\nFixes\n-Fixed a bug where dropping an item into a full bag could crash the game!\nYahoo!"
    },
    {
      "date": "2022-02-15T14:34:57.381Z",
      "displayDate": "February 15, 2022",
      "body": "v2.8.3-5 [Steam / Android / iOS]\nChanges\n-Runic Loop bonus decreased to +5 Runes! (it actually only gave +2 before, due to a bug)\n\nFixes\n-Ionic Charger projectiles will not longer despawn when going out of bounds\n-Fixed a bug which made stat-based Achievements in Era 2, 25% too easy\n-Era 1 stat-based Achievements no longer become easier after entering Era 2\n-(introduced in v2.8.1) Fixed Runic Loop to function properly function!\n-(introduced in v2.8.0) Fixed the starting Terrain to be\n-(introduced in v2.8.1) Fixed Offline Gains"
    },
    {
      "date": "2022-02-25T16:25:21.433Z",
      "displayDate": "February 25, 2022",
      "body": "v2.9.0 [Steam / Android / iOS]\nChanges\n-Q5 Runes drop +100% more often  in Era 1, and +50% more often in Era 2.\n-Eye of Vision now has a different graphic depending on if the bonus is active or not\n-Replaced some of the custom-bag graphic options\n-Elemental Assumption description now properly say \"50% Chance\" instead of 25%!\n-The first upgrade for the Vase now costs 1k gold\n-The default Cloud Save interval increased to 15 min, unless you are paired to Steam\n-New items will no longer go into the Jewerly Box\n-Swapped the Shadowbranch and Frozen Tombs tracks\n-Dodge Chance removed from stats for now until it gets fixed\n-Huuuge amount of backend optimizations!\n\nFixes\n-(iOS) Fixed a bug causing a memory leak leading to a crash\n-Fixed bug with losing Lantern Gains\n-Fixed a bug related to bags that could crash the game\n-Fixed a bug where abandoning could cause strange behavior\n-Fixed a multi-touch bug that could cause crashes or strange behavior\n-Fixed a bug related to cloud saving\n-Fixed a rare bug that could sometimes cause steam-paired saves to become out of sync\n-Fixed layering on desert pillars\n\nTons of behind-the-scene changes related to Era 3 - please report any bugs that you find!"
    },
    {
      "date": "2022-03-03T15:41:05.330Z",
      "displayDate": "March 3, 2022",
      "body": "v2.10.0 [Steam / Android Alpha]\nNew\n-There are now 7 Wizard Skin Cosmetics available in the Market! Each also comes with a Ring that provides a small bonus.\n\nChanges\n-The custom bag graphic colors have been changed to be more varied!\n-Revised the clouds on the Tundra terrain\n-Bag names can now only be 50 characters long\n-Optimized the display of Runes\n-Compact Runes Display will now be forced if using more than 100 Runes\n-Version downgrading on key-builds is now disallowed: you will probably only run into this when paired with steam\n\nFixes\n-Fixed being unable to Augment before unlocking the Market\n-Fixed some Languages being mixed up\n-Fixed the names of some soundtracks\n-Fixed a bug with the Bag graphic selection button\n-When buying a Totem, the gems in the Market item will now update\n-When using a jagged totem, the total totem count in bar will update\n-The Obelisk Shard display text will refresh upon returning to limbo\n-Fixed description on an Ice Beam perk\n-Fixed issues with recursive bag items\n-(introduced in 2.9.0) Fixed players with multiple totem and runic unlocks\n\nTotem System Changes\n-Max Totem Level raised to 4\n-Each Level now reduces appearance time by 1 min instead of 1.5 min\n-When Polishing a Totem, you won't receive copies of extra Totems that are max level!\n-Everyone is now guaranteed to find new totems at certain intervals, rather than some people getting bad luck and not getting 1 of each totem for a long long time!\n\nTo compensate for the nerfs:\n-All Totems level 2 will gain +1 copies of the Totem.\n-All Totems level 3 will be boosted to Level 4.\n-All excess Totems will be refunded back to Jagged Totems."
    },
    {
      "date": "2022-03-04T22:37:49.735Z",
      "displayDate": "March 4, 2022",
      "body": "v2.10.2 [Steam / Android]\nChanges\n-A bug was found in the behind-the-scenes balancing of Era 2. After being fixed, enemy hp and damage will be generally higher from wave 100 and up\n\nFixes\n-Fixed bugs introduced in v2.10!"
    },
    {
      "date": "2022-03-05T01:12:18.895Z",
      "displayDate": "March 4, 2022",
      "body": "v2.10.3 [Steam / Android / iOS]\n-This build implements some rebalancing of Era 2 (mob hp and damage between waves 100 to 150, gold and souls drops, research costs and speed, enchanting cost), including a slight nerf to the Great Prism bonuses!"
    },
    {
      "date": "2022-03-07T20:07:46.326Z",
      "displayDate": "March 7, 2022",
      "body": "v2.10.4 [ Steam]\nChanges\n-Difficulty increased a bit near end of Era 2\n-Dragon Totem buffed to a threshold of 70%!\n-Runes are now more likely to be Q2 or higher!\n\nFixes\n-Fixed a bug with steam pairing\n-Syncing should not cause issues when versions are out of sync\n-Fixed a bug with created bags not saving their starting graphic\n\nThis will hopefully be the last release before Era 3!"
    },
    {
      "date": "2022-03-10T17:10:18.148Z",
      "displayDate": "March 10, 2022",
      "body": "v3.1.0 [Steam / Android]\nNew\n-Era 3 is here! Wahoo!\n-Perk Icons! Perks will now show a symbol in the corner corresponding to the \"type\" of perk that it is!\n\nChanges\n-The * at the end of some usernames will now be invisible!\n-New FX when Awakening and Kindling!\n-Rings can now be removed from the Jewelry Box!\n-Cloak Spells will remain rng-fixed until Awakening!\n-The Star of Wisdom will give an indicator when it can be upgraded!\n\nFixes\n-Rerolling Limbo Trait refreshes the sprite\n-Fixed upgrading your HP during a run resulting in a wrong UI state\n-Fix for early players who are missing the jagged totem in the shop\n-Fixed bugs if you kindle or upgrade the Cloak while in Limbo\n-Fixed auto-created bags not saving their graphic"
    },
    {
      "date": "2022-03-11T13:01:42.978Z",
      "displayDate": "March 11, 2022",
      "body": "v3.1.1 [Steam / Android / iOS]\nFixes\n-Fixed bug with entering a username for the first time!\n-Fixed a bug that enabled multiple golems to be on the field from 1 equipped spell!\n-Fixed an edge case where a Ring could crash the game!\n-Fixed various typos!\n\nv3.1.2 [Steam / Android / iOS]\n-Fixed bug with entering a username for the first time...again!"
    },
    {
      "date": "2022-03-14T14:44:04.575Z",
      "displayDate": "March 14, 2022",
      "body": "v3.1.4 [Steam / Android / iOS]\nFixes\n-Fixed begin able to Focus the Great Prism to Level 2 in Era 2\n-Fixed a bug with Obliteration\n-Fixed the Nailed It Achievement so that it works as expected\n-Fixed Star of Wisdom giving indicator forever\n-(Steam) Fixed being able to tap the quit button through the Memory Tree interface\n-Fixed a stubborn typo!"
    },
    {
      "date": "2022-03-18T14:28:01.847Z",
      "displayDate": "March 18, 2022",
      "body": "v3.2.0 [Steam / Android / iOS]\nChanges\n-All new art for almost every Ring!\n-You can now reroll the Runic Table!\n-Jagged Totems appear less often in the Table now, and the Shape Totem option appears more often.\n-The Star of Wisdom now only grants a maximum of 7 star seeds\n-Brewing has a sound effect now!\n-If you Activate a custom Wizard Skin, your selection will now persist through Limbo.\n-Increased chances of finding Q4 Runes in Era 2 (30% more) and Era 3 (60% more)\n-Damage Numbers have been optimized to be about x60 more efficient! So you can keep them on more often without lagging the game!\n-Reorganized the game options!\n-New Fixed Camera option!\n-New Wizard Always On Top option!\n-The Obelisk Shard now has a progress bar when Reclaiming\n-The +Enchantment level shown on/in the Obelisk Shard now takes into account any Souls that you have\n-Maximum Level of Static Discharge perk is now 9\n-New Option (via Research Manual) to disable indicators for Funding\n-The Vase of Accumulation will now show the top 5 highest Quality Runes that you found while offline\n-During the Prologue, the game will give a nudge players to tap on the Remember button\n-(Steam) Escape key closes the currently opened bag\n-(Steam) There is now a larger, custom cursor, that hopefully will not get as lost amidst the chaos! (and an option to use the default system cursor)"
    },
    {
      "date": "2022-03-18T14:28:03.170Z",
      "displayDate": "March 18, 2022",
      "body": "Fixes\n-Fixed Uphill Battle (was just totally broken before)\n-Fixed Totemic Ring to properly give the right bonus\n-Fixed Memory Tree sometimes not started centered\n-Fixed some perk icons in codex not matching them in the staff\n-Fixed Star of Wisdom indicator not going away (again)\n-Slow and Steady will now check for completion right away\n-Fixed Molasses rune not specifying that only 1 of them can be active\n-Fixed formatting of some durations\n-Fixed Prison Cells description\n-Totem max level is now described as 4 in the Totem Pouch help\n-Fixed a typo in Golden Frenzy description\n-Fixed removing the * at end of some names\n-(Steam) The scroll wheel won't impact the Tree when the game is not in focus"
    },
    {
      "date": "2022-03-25T20:29:31.846Z",
      "displayDate": "March 25, 2022",
      "body": "v3.3.1 [Steam / Android / iOS]\nNew\n-Three new Enemy Types have been added to Era 3!\n\nChanges\n-The Level 2 Cloak will now grant an additional Spell Choice in Limbo!\n-The progress bar on the Obelisk Shard for reclaiming now works on a log scale, to be more helpful!\n-Voltaic Viper damage increased by 20%!\n\nFixes\n-Fixed the Nailed It achievement!\n-Fixed Molten Field description\n-Fixed descriptions of Traits in the Runic Table\n-Fixed inconsistencies in the blue exclusive connections in the Stage 3 Tree\n-Fixed a bug with how Enchantment levels are calculated\n-Fixed HP bonus reported in statistics item\n-Fixed a bug with resetting the game\n-Fixed a critical bug in the backend"
    },
    {
      "date": "2022-03-31T14:40:18.519Z",
      "displayDate": "March 31, 2022",
      "body": "v3.4.5 [Steam / Android Beta]\nNew\n-There is a new weekly leaderboard system! Compete by Awakening and earning Wave Points, with the top scores receiving prizes each week! Access the system via The Chalice of Eternity!\n\nChanges\n-Candyland Runes will now also give 50% Increased Souls gain!\n-The Obliteration Execution threshold was changed to 99%\n\nFixes\n-Fixed the Wizard Always On Top option\n-Fixed Runes not being received sometimes\n-Fixed inconsistent offline gains when reclaiming\n-Fixed a minor bug related to some backend balance in Era 2 and 3\n-Fixed the Fire Spirit inconsistently applying its bonus to offline Brews\n-Items unlocked in Era 3 will show \"Era 3\" as the requirement when in Era 2, instead of the awakening rank"
    },
    {
      "date": "2022-04-03T01:48:55.248Z",
      "displayDate": "April 2, 2022",
      "body": "v3.4.6 [Steam Beta / Android Beta]\n-Fixed a bug that would prevent leaderboards from being displayed in the Chalice!"
    },
    {
      "date": "2022-04-04T03:44:03.442Z",
      "displayDate": "April 3, 2022",
      "body": "v3.4.7-8 [Steam / Android / iOS]\n-Fixed a few more bugs related to leaderboards"
    },
    {
      "date": "2022-04-09T21:47:04.839Z",
      "displayDate": "April 9, 2022",
      "body": "v3.5.0 [Steam / Android / iOS]\nNew\n-There is a new item, the Pendant of Mystery! Use it to discover Ancient Lore!\n\nChanges\n-The Leaderboard won't show 0-score entries anymore\n-The Vase will reflect the bonus from the Runic Loop\n\nFixes\n-Fixed many bugs with the leaderboard!\n-Fixed a bug with Brewing!\n-Fixed a bug with holding items while certain actions occured!\n-Fixed the Fire Spirit totem not applying its bonus properly!\n-(Steam) Fixed mute in background option!"
    },
    {
      "date": "2022-04-17T02:23:55.156Z",
      "displayDate": "April 16, 2022",
      "body": "v3.5.1 [Steam / Android / iOS]\nChanges\n-The shadow from Totem Shadow will now proc Encouragement and Totemic Touch\n-The option to confirm spending dice and tokens now also turns on confirmation for empowering\n-Vase of Accumulation level now starts at Level 1 (same functionality, the display is just +1 from before)\n\nBug Fixes\n-Fixed the Pendent not granting the full 15 minutes worth of XP\n-Fixed a bug where the Owl Totem would prevent the Grim Potion from working\n-Fixed the Chaos Rune - it now works properly!\n-Fixed a bug with Steam Pairing not syncing right away sometimes\n-Ionic Charger Status Affinity now properly has a max level of 5\n-Ionic Charger Patience now properly has a max level of 100\n\nRaid Bosses are being worked on for the next content update!"
    },
    {
      "date": "2022-04-26T15:36:06.620Z",
      "displayDate": "April 26, 2022",
      "body": "v3.5.2-4 [Steam / Android / iOS]\nNew\n-A new Special Skin has been given to all existing players!\n\nFixes\n-Fixed the movement bonus from Flyweight\n-Fixed a critical bug in the backend which could crash the game\n-Fixed a bug stopping offline Runes from being given sometimes\n-Fixed a bug where, when Pairing with Steam, Steam would not always update the local save file until restarting the app\n-Fixed a bug related to having duplicate items in the Memory Tree\n\nNote that this build does break compatibility between Steam / Mobile!"
    },
    {
      "date": "2022-05-06T20:30:57.576Z",
      "displayDate": "May 6, 2022",
      "body": "v3.6.1 [Steam Beta]\nNew\n-The Era 1 Umbra Lord is here! Face off against this Beast after you have reached Awakening Rank 9 or later.\n-The Heirloom Ring is now available for 10 Gems in the Market! It allows you to gain up to 3 Levels before selecting Perks!\n\nBalance Changes\n-Cryo Prison range increased by 25%\n-Retribution duration increased to 6 s\n-Elemental Decay damage bonus increased to 20%\n-Both Bands of Perpetuation have been revised due to the Heirloom Ring!\n\nChanges\n-You can now spend Mana Stars (aka choose Perks) even when at max level!\n-Mana Stars are now given upon leveling up in Era 1\n-A few more items will now turn into Hyperlinks when they appear in descriptions\n-Text hyperlinks will no longer point to the same item\n-Added a line saying your \"Awakening Rank\" to the Stats page, not just \"Total Awakenings\" to hopefully avoid some confusion\n-Added a warning when awakening near the leaderboard reset\n-Made some backend performance optimizations!\n\nFixes\n-Fixed a bug with the great mirror when awakening without internet\n-(iOS) Fixed an odd input bug\n\nThis version will be live in Beta soon, then will remain in testing for up to a week before going live to all!"
    },
    {
      "date": "2022-05-09T17:41:55.910Z",
      "displayDate": "May 9, 2022",
      "body": "v3.6.2-3 [Steam / Android / iOS]\nFixes\n-Fixed Trait descriptions not appearing in the Runic Table\n-Fixed a few typo and text problems\n-Fixed a bug that was allowing steam sync in cases where it should not (i.e., version incompatibility)\n-The timing of the Leaderboard reset is more accurate\n-Removed some unneeded data from save files\n-There is now a cap on the number of bags that you can have (200) in order to prevent excessive save file bloat!"
    },
    {
      "date": "2022-05-12T17:03:26.159Z",
      "displayDate": "May 12, 2022",
      "body": "v3.6.4-7 [Steam / Android / iOS]\nFixes\n-Fixed various bugs with the boss fight\n-Fixed a bug with XP gain\n-Fixed a bug with the staff in limbo\n-Fixed quad spell bug\n-Fix bricked game when kindling before awakening\n-Fixed some typography problems\n-You can no longer get Preparation from Phase 2 of the boss fight\n\nBackend\n-Reduced the time it takes to initialize the game (woohoo!)"
    },
    {
      "date": "2022-05-16T13:25:31.554Z",
      "displayDate": "May 16, 2022",
      "body": "v3.6.8 [Steam / Android / iOS]\nChanges\n-The Wand of Chaos can now be held in the Staff of Knowledge, and will now be placed there when first obtained!\n\nFixes\n-Fates now properly give the 50 gem reward!\n-Fixed a serious bug with Phase 2 of the Boss fight!\n-You can now reroll perks in  phase 1 of the Boss fight, to avoid confusion!"
    },
    {
      "date": "2022-05-19T18:37:43.955Z",
      "displayDate": "May 19, 2022",
      "body": "v3.7.3 [Steam Beta / Android Beta]\nNew\n-A new Damage Tracker option has been added! Find it under Display Settings.\n\nBalance Changes\n-Voltaic Viper now shoots a trio of Vipers, and the damage has been reduced by 60%\n-Lightning Golem's projectiles travel 40% faster\n-Lightning Golem's special ability now triggers after the wizard takes 5% damage instead of 10%\n-Ring of Greed damage bonus increased to 5% from 1%\n-Ring of Reclaiming Light damage bonus increased to 25% from 10%\n-The cast speed bonus during Phase 1 of the Boss has been increased to 50% from 25%\n\nChanges\n-Revised Band of the Past description to be more clear\n-The Era Boss now has (even more) adaptive difficulty, based on the player's max wave cleared before starting the fight\n-Added a note to the Great Mirror when you must defeat the Boss to Awaken.\n-Worldshaker added to jukebox if you have defeated the boss\n-If you are at max Staff Level, you will no longer find XP Troves\n-The cost to Augment the Chronosphere increased from 1,000 to 10,000\n\nFixes\n-Voltaic Viper graphics fixed\n-Fixed a bug with the Boss fight"
    },
    {
      "date": "2022-05-28T17:10:53.763Z",
      "displayDate": "May 28, 2022",
      "body": "v3.7.4 [Steam / Android / iOS]\nChanges\n-Added the ability to re-roll the Time Cloak Spell Choices in Limbo\n-Totems have indicator when you can level them up\n-Mentioned common reasons for being banned from leaderboard\n-Many revisions to the Minotaur of Chaos:\n--Appears a lower wave\n--The Phase descriptions are hidden until the boss appears, then you'll get an indicator on the Spyglass\n--You cannot Kindle if fighting the Boss\n--Phase 1: Totally reworked!\n--Phase 2: Damage debonus reduced to 20%!\n--Phase 3: No change!\n\nBalance Changes\n-Shard Bolter Elemental Overload has been buffed\n-Shard Bolter has x2 projectile lifetime\n-Shard Bolter Slayer Perk has been reworked\n-Buffed Lightning Orb Status Affinity Perk\n\nFixes\n-Fixed Toxic Domination Perk for Poison Golem (was non-functional before)\n-Cleaned up the formatting in some Perk descriptions\n-Fixed the Cauldron not properly calculating the time left for the next Brew after returning from Offline\n-Fixed the Vase not properly showing how much Essence you gained while Offline\n-Fixed a variety of bugs with the Fire Spirit Totem\n-The Wand of Chaos will get put back into your Staff if it happens to get moved out somehow\n-[Probably] fixed dps tracker numbers showing on wrong items"
    },
    {
      "date": "2022-06-04T14:03:12.920Z",
      "displayDate": "June 4, 2022",
      "body": "v3.7.7 [Steam / Android / iOS]\nBalance Changes\n-Ionic Charger Status Affinity nerfed slightly, and max Level raised to 7\n-Ionic Charger Patience Perk has been nerfed to scale more slowly\n-Fire Stream Elemental Purity now also gives More Projectiles\n-Fire Stream Status Affinity now also has a 10% chance to Rush a random other Spell\n-Ice Golem Cryo Fuel now only Accelerates all other spells\n\nFixes\n-Fixed issue with Minotaur crashing the game\n-Fixed issue with an Achievement crashing the game\n-Fixed having duplicate of some settings items\n-Fixed an issue which could cause the game to crash\n-Fixed description formatting of a few perks\n\nOther\n-Backend changes for Era 4 are underway!"
    },
    {
      "date": "2022-06-08T11:49:41.171Z",
      "displayDate": "June 8, 2022",
      "body": "v3.7.8 [iOS]\nFixes\n-Fixed a bug causes Status Frenzy to result in extra damage dealt\n-Fixed Static Arc Elemental Overload description\n-Fixed Fire Golem Lasting Flame description\n-Increased max Level of Static Arc Status Affinity perk to 6"
    },
    {
      "date": "2022-06-08T11:50:00.289Z",
      "displayDate": "June 8, 2022",
      "body": "---------------------------------------------------------------------\nv3.7.9 [Steam / Android / iOS]\nFixes\n-Fixed a critical bug with Fire Golem\n\nChanges\n-Voltaic Sword Status Affinity scaling increased"
    },
    {
      "date": "2022-06-10T13:38:16.389Z",
      "displayDate": "June 10, 2022",
      "body": "v3.7.10 [Steam]\nNew\n-There are now 17 Steam Achievements to collect!\n\nChanges\n-Snowballs are now semi-transparent\n-Fuming Sprites and Jolting Sprites become semi-transparent upon getting huge"
    },
    {
      "date": "2022-06-13T13:28:39.955Z",
      "displayDate": "June 13, 2022",
      "body": "v3.7.12\nThis is a very minor bugfix build!\n\nChanges\n-Spells can now cast twice in a single frame, if the spell would cast 3 or more times that frame\n-Duplicate spell staggering will now only apply if the spell caster to be staggered has a positive cooldown\n-Max overcast has been increased from 150% to 200%\n\nFixes\n-Fixed the Ruination perk"
    },
    {
      "date": "2022-06-14T12:27:25.078Z",
      "displayDate": "June 14, 2022",
      "body": "v3.7.14\n-Critical bugfix for iOS!"
    },
    {
      "date": "2022-06-21T19:53:58.018Z",
      "displayDate": "June 21, 2022",
      "body": "v3.7.15 [Steam / Android / iOS]\nChanges\n-Q4 Runes drop rate increased by +20%!\n-Q5 Drop rate increased by +50%!\n-Ionic Charger Patience perk has been nerfed\n-Exploding Comet Patience Perk has been nerfed\n-Perks in the Codex are now in a fixed order based on their type\n-All Perks of a generic / shared type now show the shared type name\n-[Steam] The Space key will collect Lantern contents if possible\n-[Steam] If no window is open, the ESC key will open the exit prompt\n\nFixes\n-Elemental Devastation now properly increases status damage and not special effect strength\n-Worldshaker now properly appears in the music selection after beating the Minotaur of Chaos\n-Tweaked alpha of Fuming and Jolting sprites at huge sizes\n-Execution via Voltaic Swords will now properly kill enemies that are  Tough\n-Fixed an issue causing old scores to stay on the leaderboard when linking / transferring accounts\n-Fixed multiple issues with players being banned when transferring to new devices\n-Fixed a bug where Steam players not always be able to see the leaderboard\n-The Chronosphere gives a note if you cannot kindle due to a Boss Fate being active"
    },
    {
      "date": "2022-06-24T12:50:26.559Z",
      "displayDate": "June 24, 2022",
      "body": "v3.7.16 [Steam / Android]\n-Fixed a critical bug with Jolting Sprites!"
    },
    {
      "date": "2022-06-27T17:50:12.964Z",
      "displayDate": "June 27, 2022",
      "body": "v3.7.17 [Steam Beta]\nThis is a beta-only build for testing the Era 4 Spell Forge!"
    },
    {
      "date": "2022-06-28T19:10:02.347Z",
      "displayDate": "June 28, 2022",
      "body": "v3.7.18 [Steam / iOS]\nFixes\n-Fixed a bug causing the Beam Splitter perk to deal incorrect damage\n-Fixed a bug that could crash the game\n-Fixed greyed out perk icons\n\nEra 4\n-Fixed various bugs"
    },
    {
      "date": "2022-07-01T15:45:24.591Z",
      "displayDate": "July 1, 2022",
      "body": "v3.7.19 [Steam / iOS]\nChanges\n-The early game is now a bit easier (less enemy hp and damage)!\n-Ionic Charger Status Affinity Perk: max level was raised from 7 to 10, the starting bonus is lower, and the scaling has been reduced.  (the goal is to make it not so dominant, and encourage more build diversity)\n-Revised Perk icons for Vengeance and Ruination\n-Added ability to request account deletion\n-Some Era 4 unlockables are now visible if you are in Era 3\n\nFixes\n-Update many backend components to improve game stability\n-Fixed a bug with awakening after having lost network connection\n-Fixed a bug with era 4 testing"
    },
    {
      "date": "2022-07-04T10:58:52.153Z",
      "displayDate": "July 4, 2022",
      "body": "v3.7.21 [iOS]\nChanges\n-The biggest gold passive nodes on the tree have increased bonus, from +14% to +15%\n\nFixes\n-Fixed a bug preventing the game from opening for a number of players!\n-Fixed a bug impacting an assortment of perks."
    },
    {
      "date": "2022-07-06T10:42:34.739Z",
      "displayDate": "July 6, 2022",
      "body": "v3.7.22 [Android]\nChanges\n-Revised language for Fade Death, Mortician, and Elemental Assumption to be more clear.\n-Change language of \"arena\" to \"battlefield\" everywhere\n\nFixes\n-[Android] Fixed a critical bug\n-Fixed a bug causing Radiant Stars to sometimes raise Perks past their intended maximum level\n-Improved the account deletion process\n-Fixed a rare crash that can occur in the prologue"
    },
    {
      "date": "2022-07-07T20:56:32.632Z",
      "displayDate": "July 7, 2022",
      "body": "v3.7.23 [Steam / Android]\nChanges\n-Retribution cooldown reduced to 15 s\n-Changed the name of Voltaic Swords Sweeping Charge to Ruination\n\nFixes\n-[iOS] Fixed persistent bug crashing the game for players on iOS 13 or below.\n-Fixed a bug with Toxic Bolt\n-Fixed a bug with Exploding Comet\n-Fixed King Cobra Perk scaling\n-Fixed a bug with Voltaic Swords and many other spells!"
    },
    {
      "date": "2022-07-14T03:04:49.749Z",
      "displayDate": "July 13, 2022",
      "body": "v3.7.24-5 [Steam Beta]\nChanges\n-Added a Magical Note tutorial Item for new players\n-Revised description of Death Defiance to clarify that you Dodge all Attacks (instead of \"becoming invincible\")\n-Revised the description of the Vampirism Rune to be better\n-Reduced the hitbox of Toxic Spray\n-Improved backend performance a bit\n\nFixes\n-Fixed missing text in Bestiary\n-Fixed Preparation Trait combined with Copycat or Extreme Personality - finally - hooray!\n-Fixed broken Golem attack animations\n\nEra 4\n-Era 4 is almost 100% complete! Planned global release date is July 22nd!"
    },
    {
      "date": "2022-07-18T15:14:18.116Z",
      "displayDate": "July 18, 2022",
      "body": "v3.8.0 [Steam / Android]\nChanges\n-2 New Mounts are available upon entering Era 2!\n-The Italian language is now integrated!\n\nFixes\n-Fixed and polished countless text entries in the game!\n-Fixed a graphical bug with the joystick\n-[Android]Updated Firebase SDK to fix random crashes\n\nEra 4 Changes\n-Beta testers now have proper mirror counts\n-Fixed Fiery Deluge crash\n-Naked and Alone, and WTD now give extra gems on completion\n-Fixed and rebalanced Frozen Singularity"
    },
    {
      "date": "2022-07-18T22:26:09.555Z",
      "displayDate": "July 18, 2022",
      "body": "v3.8.1 [Steam / Android]\nChanges\n-3 New Wizard Skins + Rings!\n-You will now gain x2 Timeshards if at Max Awakening Rank, with all Fates completed, and having 90% of more of that Era's Achievements completed!\n\nFixes\n-Fixed many mistakes in the text\n-Fixed a bug that caused new totems to not drop as often as they should\n-Fixed Elemental Assumption for Poison Golem and Fuming Sprites\n-Fixed Wind Up (it was capping at a higher max bonus than intended)"
    },
    {
      "date": "2022-07-19T20:58:24.238Z",
      "displayDate": "July 19, 2022",
      "body": "v3.8.2 [Steam / Android]\nFixes\n-Updated some backend components\n-Fixed bugs with Toxic Cloud Status Affinity, Cleansing Touch Trait, and Spreading Plague Trait\n-Fixed a bug that sometimes caused Poison to not be treated as an Elemental status effect\n-Fixed a bug that caused enemy status counts to rise indefintely under certain interactions.\n-Fixed another bug with new totems not rolling as often as they should\n-Fixed Mirror Casting teleport bug\n-Fixed a typo for Traitaholic\n-Fixed a bug impacting Era 4 Beta players"
    },
    {
      "date": "2022-07-20T03:32:15.049Z",
      "displayDate": "July 19, 2022",
      "body": "3.8.3 [Steam / Android]\nChanges\n-Reduce cost of spell skins, and reimbursed beta players\n\nFixes\n-Fixed a bug with the time remaining to reclaim\n-Fixed a bug with balance after wave 200"
    },
    {
      "date": "2022-07-20T19:55:58.981Z",
      "displayDate": "July 20, 2022",
      "body": "v3.8.4-5 [Android]\nThis update is an attempt to stop a crashing issue Android 12!"
    },
    {
      "date": "2022-07-21T19:32:45.206Z",
      "displayDate": "July 21, 2022",
      "body": "v4.0.0 [Steam / Android / iOS]\nEra 4 is now available! Yahoo!\nTremendous thanks to everyone playing and supporting the game!"
    },
    {
      "date": "2022-07-25T20:33:05.906Z",
      "displayDate": "July 25, 2022",
      "body": "v4.0.1 [Steam / Android]\nChanges\n-Updated the icons for the Era 4 value bundle, x10 Bullion Disc pack, and Smoldering Star Seed!\n-The Overkill!!! Achievement will now also trigger from a Skeletal Trooper\n-The Totemic Fiend Achievement requirements have been reduced\n-The requirement for That One Guy Achievement is now Enchanting Level less than 10 (to prevent strange edge cases)\n-The Runic Cauldron and Table are now unlocked right away in Era 3, regardless of Awakening Rank\n\nText / Display Updates\n-Revised language about Enemies \"spawning\" to consistently be \"appearing\"\n-Revised how durations are displayed around the 60 s mark (no more going from 1 min to 60 s)\n-Clarified the language of the Shard Bolter Slayer Perk\n-That One Guy now mentions to disable passive enchanting\n-Revised the games conversion between game-units and meters (only impacts the descriptions of some things)\n-Updated game text for some languages"
    },
    {
      "date": "2022-07-25T20:33:13.535Z",
      "displayDate": "July 25, 2022",
      "body": ".\nFixes\n-Fixed bugs with the Traitful Trait\n-Fixed a bug with the Cleansing Touch Trait\n-Fixed a bug with the Face the Foes Trait\n-Fixed the Falling Skies skin crashing the game\n-Fixed the skin for the spiral fireballs that come from Firestorm\n-Fixed a bug with the Fiery Beams Skin turning on when not owned\n-Picking Copycat from the Tree will now properly work when you had already selected Preparation or Traitful\n-Fixed the Slow Motion Achievement\n-Fixed a bug with Smoldering Star Seeds\n-Fixed the Star of Wisdom notification not going away in Era 4\n-Added a Reroll confirmation for the Timecloak in Limbo\n-Fixed the character portrait not updating in Limbo after rerolling the Timecloak\n-Fixed an issue migrating very old saves to newer game versions\n-Fixed faulty email address\n-After awakening, you will get a notification on the free Die (and Disc if applicable) items in the shop\n-Spell details now use proper units for Range and Lifetime\n-Updated various backend components to hopefully reduce crashes on Android"
    },
    {
      "date": "2022-07-26T12:13:32.796Z",
      "displayDate": "July 26, 2022",
      "body": "v4.0.2 [iOS]\n-Fixed the Slow Motion achievement for real this time!"
    },
    {
      "date": "2022-07-27T02:25:10.168Z",
      "displayDate": "July 26, 2022",
      "body": "v4.0.3 [Android]\nFixes\n-Fixed description of a Fiery Deluge Perk\n-Unified descriptions of Runic Loops II and III\n-Fixed not being able to Flip Magical Coins after reaching Level 50\n-[Android] Made some backend changes in an attempt to reduce crashes!"
    },
    {
      "date": "2022-07-29T01:50:10.341Z",
      "displayDate": "July 28, 2022",
      "body": "v4.0.4 [Steam / Android / iOS]\nChanges\n-The penalty from Tratiful has been reduced to 5%!\n-Cleansing Touch now only has a 25% Chance to remove ESE from enemies!\n-The detailed Spell info page now shows the base spell damage in parenthesis!\n-The Chalice now has a button to send an email in the case of a wrongful ban!\n\nFixes\n-Fixed a bug with Toxic Spores Ruination Perk"
    },
    {
      "date": "2022-08-05T03:33:22.432Z",
      "displayDate": "August 4, 2022",
      "body": "v4.1.0 [Steam]\nChanges\n-The amount of stars given by the Star of Wisdom has been rebalanced!\n-Smoldering Star Seeds now give x2 Mana Stars and an Ultra Radiant Star!\n-There is a new Visual Cooldowns option!\n-There is a new Bag option to Lock Contents!\n-There is a new Spirit Engine option to Auto Fund (Era 3+)!\n-The Runic Utility Bag and the Runic Cauldron will now recursively search and consider Runes in sub-bags!\n-Disabled Perks now have a more pleasing and clear appearance!\n-A new Splash Screen will sometimes show if you are in Era 2 or beyond!\n-Traits obtained from Traitful will now go into the same bag as Traitful (if the Traitful in question is an Item)!\n-The Limbo item may show a different text rarely...\n\nFixes\n-Fixed an issue with enemy movement at very high frame rates\n-Fixed an issue with Void Gluttons\n-Added cast speed bonus to the trophy case summary\n-Reclamation rate bonuses now properly impact offline reclaiming\n-A locked bag (including the main bag) will no longer admit new items\n-You can now view the edges of the Mirror Tree when zoomed in\n-When using the Shard Bolter skin, it will now use the alternate graphic for the immobile Snowballs\n-Fixed an issue with the input sometimes getting stuck on mobile\n-Fixed the Wand of Chaos moving in position after loading a save file"
    },
    {
      "date": "2022-08-05T14:16:35.841Z",
      "displayDate": "August 5, 2022",
      "body": "v4.1.1 [Steam / Android / iOS]\nFixes\n-Runic Utility Bag now accepts bags\n-Fixed Shard Bolter Snowball crash\n-Fixed Thunderfreeze Oracle default skin selection"
    },
    {
      "date": "2022-08-07T01:37:46.817Z",
      "displayDate": "August 6, 2022",
      "body": "v4.1.2 [Steam / Android]\nHotfix build, patching a critical bug!"
    },
    {
      "date": "2022-08-08T19:20:00.269Z",
      "displayDate": "August 8, 2022",
      "body": "4.1.3 [Steam]\n-Fixed a bug causing the Damage Tracker to over-count some damage"
    },
    {
      "date": "2022-08-10T19:59:43.498Z",
      "displayDate": "August 10, 2022",
      "body": "v4.2.0 [Steam / Android / iOS]\nNew\n-The 2nd Umbra Lord is now available to fight! Defeat the Corrupted Beastmaster at Awakening Rank 19 to earn the Lost Psalm!\n\nChanges\n-Status Fiend cooldown reduced to 0.2 s\n-The way that the Battle Trance Hymnal settings work has been altered\n-Revised how Kindling is presented, to help prevent players from getting a wrong understanding\n-Traitful will no longer destroy Traits obtained from Limbo, Extreme Personality, or Copycat\n\nFixes\n-Fixed Poison Golem Status Affinity with Elemental Assumption\n-Enemy momentum is now capped. This should prevent enemies from being flung offscreen in some instances.\n-Fixed issue with enemy movement at variable frame rates\n-Fixed Preparation not granting Perks in a few scenarios\n-Visual Cooldowns will no longer block HUD notifications\n-Rerolling the Runic Table will acknowledge the Require Confirmation option\n-Fixed a crash with Firestorm and Status Affinity\n-Fixed a rare bug with Wizard movement"
    },
    {
      "date": "2022-08-16T02:46:26.229Z",
      "displayDate": "August 15, 2022",
      "body": "v4.2.5 [Steam / iOS / Android]\nChanges\n-The Kindling Timeshard cost has been reduced by 10%\n-The XP required for Levels 2-15 has been reduced.\n\nFixes\n-Revised Hymnal behavior (classic hymnal is almost identical to pre v4.2, with the addition of Very High setting)\n-The Very High Aggression setting has been tuned\n-Hymnal Ideal Distance is now in m units\n-Fixed Flux Capacitor Perk description\n-Fixed a crash with Umbra Lord 2\n-Updated the Phase 2 description for Umbra Lord 2"
    },
    {
      "date": "2022-08-17T14:52:51.858Z",
      "displayDate": "August 17, 2022",
      "body": "v4.2.6 [Steam / Android / iOS]\nChanges\n-Changed \"Ideal Distance\" in the advanced Hymnal to be \"Aggression\"\n-Damage from non-spell sources (like Death Orbs and Totems) will no longer contribute to the damage tracker\n-The Chronosphere will give a note that you cannot Kindle if you are fighting an Umbra Lord\n\nFixes\n-Fixed a crash issue with the Book of Fate\n-Fixed the Spyglass preview for the Minotaur of Chaos\n-Fixed an issue where the Awakening from Kindling would not complete Fates\n-Winter's Coil should not cause lag under certain conditions anymore\n-Traitaholic will check for completion at the start of each run\n-The Eye of Vision should not longer give another notification after you tap it without watching a vision"
    },
    {
      "date": "2022-08-19T21:03:03.670Z",
      "displayDate": "August 19, 2022",
      "body": "v4.2.9 [Steam Beta]\n-Revised some backend components to provide greater game stability!\n-Fixed a bug with the Corrupted Beastmaster crashing the game!"
    },
    {
      "date": "2022-08-23T01:35:49.343Z",
      "displayDate": "August 22, 2022",
      "body": "v4.3.0 [Steam / Android]\nNew\n-The Chalice of Eternity has been totally revised! There is a now a League system with daily rewards! Yahoo!\n\nChanges\n-The Chalice unlocks at Awakening Rank 2, but you must Awaken again to get onto the Leaderboard.\n-Mobile clients will now automatically attempt to re-login after a long period of time."
    },
    {
      "date": "2022-08-24T13:16:53.390Z",
      "displayDate": "August 24, 2022",
      "body": "v4.3.1 [Android]\n-Fixed the Chalice on mobile!\n-Fixed the end-of-Era x2 Timeshard gain bonus!"
    },
    {
      "date": "2022-09-02T00:30:23.676Z",
      "displayDate": "September 1, 2022",
      "body": "v4.4.0 [Steam / Android / iOS]\nNew\n-Two new Lore Entries have been added!\n-There is a new \"Spells on Bottom\" option - use it to see enemies, troves, and totems more clearly!\n\nFixes\n-Fixed the Chalice UI buttons on mobile\n-Fixed a missing string in the Market\n-Using lots of Rune is now a TON faster!"
    },
    {
      "date": "2022-09-05T14:00:31.299Z",
      "displayDate": "September 5, 2022",
      "body": "[Server Change]\n-The Chalice rewards have been increased!"
    },
    {
      "date": "2022-09-10T19:09:18.762Z",
      "displayDate": "September 10, 2022",
      "body": "v4.5.0 [Steam Beta]\nNew\n-The Slipstream Item is now available at Awakening Rank 3! Timelines collide in the Slipstream: it allows you to exchange Gifts with other Players!\n\nChanges\n-The  Hymnal now unlocks at Rank 4 now instead of 5\n\nFixes\n-Fixed hitbox on Chalice buttons\n-Focusing to Era 4 Mirror no longer requires a respec if you have 36 mirrors\n-Fixed the Username sometimes not displaying properly in the Statistics item after paring with Steam"
    },
    {
      "date": "2022-09-12T17:34:32.356Z",
      "displayDate": "September 12, 2022",
      "body": "v4.5.1 [Steam Beta]\nFixes\n-Fixed an issue with summoned mobs sometimes glitching out\n-Fixed an issue where mobs could be healed after received fatal damage, resulting in a various problems\n-The button for Activating Runes will no longer be interactable if you cannot Activate Runes\n-Golems will now aim properly when using Mirror Casting\n-Bosses will no longer take extra damage if they are the first enemy of the wave\n-Raging Fire is now properly marked as a Patience Perk\n-Certain corrupted save file will now be auto-repaired"
    },
    {
      "date": "2022-09-14T12:31:11.331Z",
      "displayDate": "September 14, 2022",
      "body": "v4.5.2 [Steam]\nNew\n-Perks that have counters will now show the relevant counter onscreen! These Perks are currently affected:\n--Falling Skies' Snowstorm\n--Fire Stream's Afterburner\n--Winter's Coil Frozen Mirror\n--Fiery Beams' Overload\n--Lightning Orb's Static Attraction\n--Exploding Comet's Aftershock\n--Eruption's Raging Fire\n--Fire Golem's Patience\n--Poison Golem\n--Ice Golem\n\nChanges\n-Only 1 Ultimate Power Rune can be used at a time now!\n-Fire Golem's Patience now gives x100 as many charges, and requires 100 Charges to activate\n\nFixes\n-Perk with unique names now show the standard name in the Staff as well as the Codex (when applicable)\n-Smaller Ice Balls from Falling Skies can now properly trigger the Icy Compensation Perk\n-Fixed a bug with Activated Runes not always displaying\n-You will no longer get level up notifications when at max level\n\nSlipstream\n-Reworked slipstream item slightly\n-Buffed Farm Souls and Jackpot Runes\n-Fixed League not showing in Slipstream"
    },
    {
      "date": "2022-09-15T12:32:28.822Z",
      "displayDate": "September 15, 2022",
      "body": "4.5.3 [Android / iOS / Steam]\nMinor bugfix update for the Slipstream"
    },
    {
      "date": "2022-09-20T21:58:20.822Z",
      "displayDate": "September 20, 2022",
      "body": "v4.6.0 [Steam / iOS / Android]\nNew\n-The 3rd Umbra Lord can now be encountered at Awakening Rank 29! Defeating them awards the Scarecrow and the Orb of Prescience artifacts!\n\nFixes\n-Repaired saves missing the Lost Psalm"
    },
    {
      "date": "2022-09-29T15:39:48.395Z",
      "displayDate": "September 29, 2022",
      "body": "v4.7.0\nNew\n-There is a new Graphics option to limit the number of Spell Objects! (Note: this is not a graphics-only setting, as less Spell Objects will be created!)\n\nChanges\n-Added a Release button to Scarecrow\n-Trove Chance bonus from Awakening Tree greatly reduced (reduced by x2.5)\n-Trove Chance rewards from Achievements greatly increased (total of +4% to +35%)\n-All Damage from ESEs has been increased by 25%\n-The duration of ESEs has been capped to 5 s (before any status duration bonus is applied)\n\nFixes\n-Fixed game crash when swapping out certain spells\n-Fixed a hardlock issue with the Scarecrow\n-Fixed an issue with the Orb of Prescience not showing the right enemies\n\nSpell Changes/Fixes\nVoltaic Swords\n-Patience has been dramatically buffed\n-Swordsmith now adds damage at higher levels\n-Swordlets deal less damage at lower perk levels, but significantly more damage at higher perk levels (also fixed formatting)\n\nFirestorm\n-Status Affinity damage has been buffed\n-Bloodthirst Chaos status level scales faster now\n-Ethereal Command deals more damage"
    },
    {
      "date": "2022-09-29T15:39:50.865Z",
      "displayDate": "September 29, 2022",
      "body": "Jolting Sprites\n-Status Affinity damage increased and it no longer reduces the duration of the ESE\n-Patience damage massively increased\n-Charged Up max level is now 10\n-Quantum Tunneling max level is now 10\n-ESE damage now properly factors in damage bonuses from perks\n\nIce Beam\n-Status Affinity clarified to say \"Damage per tick\", and the damage bonus is greatly increased\n-Reflection now gives additional damage at higher levels\n-Icy Amplification max level is now 6\n-Icy Recursion now properly increases damage instead of reducing it, and max level is now 10\n\nFuming Sprites\n-Status Affinity buffed and max level is now 10\n-Elemental Purity buffed and max level is 4\n-Fixed not casting all 3 Sprites (!!!)\n\nStatic Arc\n-Sparks now properly apply ESE\n-Patience perk now boosts damage\n\nLightning Golem\n-Patience perk now properly boosts damage"
    },
    {
      "date": "2022-10-04T15:35:20.356Z",
      "displayDate": "October 4, 2022",
      "body": "v4.7.4 [Steam / Android / iOS]\nLatest bugfix update!"
    },
    {
      "date": "2022-10-05T00:46:02.110Z",
      "displayDate": "October 4, 2022",
      "body": "v4.7.5 [Steam / iOS Android]\nChanges\n-Face the Foes bonus is now 15%\n-Houselings can no longer be pushed around as easily\n\nFixes\n-Fixed a critical bug causing various crashes and UI problems\n-Fixed the description of Icy Recursion perk\n-Fixed a bug causing the Spyglass to update 1 wave later than when it should\n-Fixed a bug with Essence of Glutton that could causes waves to progress more slowly and bosses to take less damage\n-Fixed bug with slipstream if you spammed the button"
    },
    {
      "date": "2022-10-07T01:57:36.116Z",
      "displayDate": "October 6, 2022",
      "body": "v4.7.10 [ Steam / Android / iOS]\nChanges\n-Tweaked language on the Scarecrow to be clearer\n-Playtime in the Statistics item will no longer say Forever\n\nFixes\n-Fixed players who 1) Got two Spectral Manor Fates, or 2) Did not receive the Spectral Manor Fate\n-Fixed the Jolting Sprites Elemental Overload Perk"
    },
    {
      "date": "2022-10-07T13:57:52.843Z",
      "displayDate": "October 7, 2022",
      "body": "v4.7.11 [Steam]\n-Fixed a bug causing Golems to crash the game"
    },
    {
      "date": "2022-10-08T17:39:43.212Z",
      "displayDate": "October 8, 2022",
      "body": "v4.8.0 [Steam / Android / iOS]\nChanges\n-Four new container Items have been added to help with Item organization! Each of these items has a special 'Gather' button in their settings which will collect all Items that reside in that container by default\n-In addition, The Star of Wisdom can hold and gather Stars!\n-Rune descriptions now say \"x Rewinds\" instead of \"x Runs\"\n\nFixes\n-Fixed the description of the Repulsion Rune"
    },
    {
      "date": "2022-10-13T13:30:30.835Z",
      "displayDate": "October 13, 2022",
      "body": "v4.8.1 [Steam / Android / iOS]\nFixes\n-Fixed a bug that could crash the game for Ice Golem!\n-Fixed a but that could crash the game!\n-Fixed desc of Repulsion Rune!\n-Fixed a bug with over-sized bags!"
    },
    {
      "date": "2022-10-24T19:00:41.133Z",
      "displayDate": "October 24, 2022",
      "body": "v4.8.2 [Steam]\nBig Changes\n-Completing a Fate will now grant Mirrors, unless you are in the most recent Era (currently 4)!\n-The Timeshard cost to Kindle has been reduced for Eras 1, 2, and 3!\n-The Pack of Great Value now gives 500 Gems instead of 250!\n\nBalance Changes\n-Changed the Winter's Coil Patience Perk: each Spike can now create only 1 Mega Spike, and its damage has been reduced slightly\n-Gem Troves will now spawn no later than every 15 minutes, if you have any left to collect for the day!\n-The Hymnal now unlocks at Rank 3\n-The Limbo Trait now unlocks at Rank 3\n-Fates now unlock at Rank 5\n-Getting Golemancy is no longer RNG dependent\n\nMinor Changes\n-The \"Spells on Bottom\" option clarified to be \"Render Spells below Enemies\"\n-The Damage Factor for spells is now on it's own line with a better description\n-Reduced the size of the Slipstream bag\n-Exclusive Perks have an extra line of text explaining what other Perk they will exclude\n-The Chronosphere will say Active Time to Kindle is \"soon\" if less than estimated 8 hrs remain\n-Your current Rune Drop Odds are now shown in the Rune Bag help\n\nFixes\n-Fixed a bug with the Heavy Magic Trait\n-Spells in the Slipstream will now properly show what Spell Skin other players are using\n-Instant-Effect Runes can now be brewed (e.g., Time Warp)\n-Fixed spell limiting to work properly with Toxic Bolt"
    },
    {
      "date": "2022-10-25T03:15:32.613Z",
      "displayDate": "October 24, 2022",
      "body": "v4.8.3 [Steam / Android / iOS]\nBalance Changes\n-The 3rd Spell Slot is now unlocked at Wave 7\n-The 4th Spell Slot is now unlocked at Rank 1\n-The Limbo Trait is now unlocked at Rank 2\n-The Elemental Master is now unlocked at Rank 4\n\nFixes\n-Fixed bugs introduced in v4.8.2"
    },
    {
      "date": "2022-10-26T02:07:00.514Z",
      "displayDate": "October 25, 2022",
      "body": "v4.8.4 [Steam / iOS / Android]\n-Fixed a bug introduced in v4.8.2 that could crash the game with Toxic Cloud"
    },
    {
      "date": "2022-10-28T14:14:43.889Z",
      "displayDate": "October 28, 2022",
      "body": "v4.8.14 [Steam / iOS / Android]\nEra 5 Testing\n-Era 5 is now available to beta testers! To access the beta, you must be at Awakening Rank 40 with enough Timeshards to Kindle. Then, enter the code \"beta\" in the Vault! Update: Testing is currently closed!\n\nChanges\n-Elemental Contagion now also increases ESE Duration and Damage\n\nFixes\n-Fixes a backend issue with broken Perk choices\n-Fixed the Wizard Battle Fate (couldn't use runic utility bag while in it\n-Fixed Fire Stream's Afterburner Perk\n-The Great Prism will give an indicator when you can Focus"
    },
    {
      "date": "2022-11-01T18:53:19.277Z",
      "displayDate": "November 1, 2022",
      "body": "v4.8.16-17 [Steam / Android / iOS]\nNew\n-There is a new Cinematic Mode option which will disable the UI until you tap the screen again!\n-There is a new Splash Screen which you will sometimes see in Era 3 and beyond!\n\nChanges\n-Removed Preparation as a possible Trait you can get from Traitful\n-Changed the logic for which Terrain Set is chosen during Fates\n-There are now half as many ranged units in some of the early Waves\n\nFixes\n-Fixed a game-breaking bug with the Runic Utility Bag\n-You can now Kindle from Limbo\n\nEra 5 Changes and Fixes\n-Fixed crash when using 6 spells\n-Fixed an issue with the new Era 5 Terrain Set\n-Fixed Visual Cooldowns with Companions\n-Fixed a bug resulting in +100% Companion Cast Speed (!)\n-Golems and Companions will now push away from each other instead of stacking\n-Removed the Era 5 Tree Shifter feature\n-Added a new Mystic Anchor item!"
    },
    {
      "date": "2022-11-02T00:00:28.815Z",
      "displayDate": "November 1, 2022",
      "body": "v4.8.18\n-Fixed a bug causing the Elemental Master to have Golem Spells"
    },
    {
      "date": "2022-11-02T13:09:30.146Z",
      "displayDate": "November 2, 2022",
      "body": "v4.8.19-20 [Steam / Android / iOS]\nNew\n-There is a new Trait Diary to hold your Traits! Obtained Traits will go here by default now. (You will get the Diary when you next obtain a Trait.)\n-New graphic for the Slipstream Exchange!\n\nFixes\n-Fixed crash when looking at the spell help\n-Fixed Splash Screen crash in Era 3+\n\nEra 5 Changes\n-Chalice Champion is easier\n-Implemented icons for the Era 5 Runes\n-Revised the Anchor icon\n-Fixed a bug with Companions\n-Fixed Telekinesis"
    },
    {
      "date": "2022-11-07T05:12:34.788Z",
      "displayDate": "November 7, 2022",
      "body": "v5.0.1 [Steam / Android / iOS]\nNew\n-Era 5 is here!\n-As a thank you, all existing players have received the Alpha Skin, and new players can enter the code \"Alpha\" to receive the skin as well!\n-The Chaos Forge is also live in this update - the Chaos Forge is a long-term progression mechanic based around using Magic Dice!\n\nBalance Changes\n-Totemic Bond has been buffed\n-Cleansing Touch has been buffed\n\nChanges\n-The Elemental Equilibrium Achievement now properly checks for completion\n-The icon for the Spell Skin Token has been changed\n-The save resolution logic now checks how many IAPs have been made. This will stop rare cases of lost purchases when syncing with Steam!\n\nEra 5\nChanges\n-Elite Killer is easier to get now\n-Generic achievements made harder\n-Pocket Mirror Traits appear less often in Limbo\n-Scavenger will no longer appear in Limbo or from Traitful\n-Master Enchanter Fate rebalanced\n-Clarified Advancer description\n-Restricted some of the Traits that Augmenter can copy\n-Added option to reroll pets in Limbo\n\nFixes\n-You can properly spend all 48 Mirrors now\n-Fixed Equilibrium Fate\n-Fixed Daybreak not reducing the cooldown for Nick\n-Added upgrade indicator for the Spell Forge"
    },
    {
      "date": "2022-11-07T13:13:22.838Z",
      "displayDate": "November 7, 2022",
      "body": "Chalice rewards have been buffed! (server-side change, so no update needed)"
    },
    {
      "date": "2022-11-11T18:25:36.830Z",
      "displayDate": "November 11, 2022",
      "body": "v5.0.2 [Steam / Android / iOS]\nChanges\n-Horned Healer will not showing the healing FX if Healing Inhibitor is enabled\n-The Treasure Trail Offline Time component now rounds your offline time to the nearest minute!\n-Companion Spells are now regarded as the 5th (and 6th) spell slots, for purposes of left/right effects.\n-Soften the Fall will now mitigate fatal damage!\n\nFixes\n-Fixed Fuming Sprites Purity Perk\n-Repaired save for players with multiple Spectral Manor Fates\n-Fixed spells that impact left/right spells\n-Fixed Randomonion Fate\n-Fixed and reset a few era 5 achievements!\n-Potential fix for default parent containers behaving oddly\n-Fixed Augmenter allowing you to obtain +1 Pocket Mirror Trait\n-Fixed indicator stuck on the market skins item\n-Fixed Runic Archives showing duplicate Runes after Kindling"
    },
    {
      "date": "2022-11-14T19:24:59.010Z",
      "displayDate": "November 14, 2022",
      "body": "v5.0.3 [Steam / Android / iOS]\nChanges\n-Optimized the game performance when many enemies are onscreen at once, and also in general!\n-When using one of the Free Reroll Rings, the graphical FX will show the Ring instead of a Magic Die!\n-Updated Fiery Beams desc to mention the slight push effect\n\nBalance Changes\n-Companions no longer get the extra damage bonus of the Elemental Master\n-The Chance for a Winter's Coil mega spike has been capped at 50% per spike.\n-Ionic Charger Overload Perk now has a max level of 15, has been reworded, and the distance component now scales linearly\n-Ring of Greed now has a 2 s cooldown instead of 1 s\n\nFixes\n-Fixed Wand of Chaos resetting your XP sometimes\n-Fixed some Companion targeting issues when using Falling Skies, Ice Beam, Jolting Sprites, Static Arc, and Shard Bolter\n-Purchasing a Forge Bonus will immediately update the displayed Essence count\n-The background color for Forge Bonuses will change if you can afford to Upgrade it\n-Fixed a bug where the Elemental Master extra damage wasn't applied after Reloading until you picked a Perk\n-Fixed a bug with Augmenter creating Traits that it should not\n-Augmenter will no longer randomly destroy Traits obtained via Limbo\n-Fixed a bug with the Star of Wisdom\n-Fixed typo with the Dinker Cloud update\n-Companion Icons will properly reflect the current skin in use\n-Companion Perks show the proper icon if a Spell Skin is in use\n-Fixed not all Perks showing up in Companion Perk Pool selections\n-Fixed Perk counter for Fiery Beams Elemental Overload\n-If a Companion has maxed out all Perks in the chosen Perk Pool, it will default ot choosing either TM or ER\n-[Steam] Fixed rare crash when using multiple monitors\n-[Steam] Added a more coherent error message is given if Steam is not running"
    },
    {
      "date": "2022-11-16T20:39:21.145Z",
      "displayDate": "November 16, 2022",
      "body": "v5.0.6 [Steam]\nMASSIVE optimization of the startup time for the game! Likely x2 to x3 faster on most devices\n\nChanges\n-Horned Healers can now only heal 3 times\n\nFixes\n-Fixed synchronization with people who have more than 3 spells\n-The Render Spells on Bottom option properly renders more FX on bottom\n-Fixed Healing Inhibitor\n-Fixed being able to select 2 Perks in Limbo in some cases\n-[Mobile] Revised backend notification SDK"
    },
    {
      "date": "2022-11-21T14:55:06.305Z",
      "displayDate": "November 21, 2022",
      "body": "v5.0.12 [Steam / iOS / Android]\nFixes\n-Fixed Companion Damage and Cast Speed bonuses not being Applied!\n-Multiple Death Defiances can now trigger in a single Rewind\n-Fixed an edge case where Death Defiance may not activate early in a rewind\n-You can no longer get Copycat or Preparation from the Runic Table\n-Farm Souls and Jackpot give the proper amount of resources now (x2 from before)\n-Fixed a bug where an indicator could get stuck on the Trait Diary\n-Golem and Companion pushback is now properly framerate independent\n-[iOS] Fixed the Offerwall!"
    },
    {
      "date": "2022-11-26T17:22:15.211Z",
      "displayDate": "November 26, 2022",
      "body": "5.0.13 [Steam / Android]\nChanges\n-Enemies that keep away from the Wizard will no longer run far offscreen!\n-Enemies can no longer get pushed super far offscreen from push effects (like the Butterfly Totem)\n-You can now destroy the default container items if they are empty\n-Custom bags can now use the graphics for the currency pouch, bag of insight, and utilities bag\n-Elemental Overload / Purity now only look at the last Spell that the Wizard cast (aka, Companion Spells are ignored)\n-The bonus from Elemental Decay has been doubled to 40%\n\nFixes\n-Fixed a variety of bugs introduced recently related to Spell Skins\n-Fixed the Telekinesis Rune\n-Fixed a visual bug with Companion Spell Statistics\n-Fixed the Hymnal Vision parameter\n-Fixed description of Smoldering Star Seed\n-Fixed the first part of the spell skin for Fiery Deluge\n-[Mobile] Probable fix for mobile notifications crashing sometimes"
    },
    {
      "date": "2022-11-28T13:59:35.233Z",
      "displayDate": "November 28, 2022",
      "body": "v5.0.15 [Steam / iOS]\n-Repaired save files that have 2 Spectral Manor Fates\n-Fixed Telekinesis Rune (again!)"
    },
    {
      "date": "2022-12-01T02:36:45.503Z",
      "displayDate": "November 30, 2022",
      "body": "v5.1.2 [Steam / Android / iOS]\nNew\n-There is now a Wizarding Manual item, used to obtain a variety of essential items! Right now it is only used to obtain Era 1 items.\n-New Volume sliders for Music, Combat Sounds, and UI Sounds!\n-There is a new option found in the Memory Tree to Purchase Nodes Quickly\n-You can now Respec the Chaos Forge using a Respec Token\n-There are now Power and Souls currency items that explain their (simple) use!\n\nBalance Changes\n-Bonus per Trove/Totem and max bonus for Nepotist reduced by 50%\n-The first level of each Research Project is 50% cheaper\n-Fire Stream is now an Era 2 Spell, and Flarefish is an Era 1 Spell.\n-Re-ordered the unlock order of multiple early game items\n-You can now only Enchant for +5 or more by default. Enable arbitrary Enchantments from Interface options!\n-The delay caused by the multiple spell casting mechanic won't impact different spell users (aka, the Wizard and Companions)\n\nChanges\n-A number of minor typographic improvements have been made\n-The Timeshards item now tell you how many you are earning\n-The Lantern now loses contents upon Rewinding instead of upon entering the Chronozone\n-The Chronosphere now states how many timeshards you have in the bottom left\n-Changed the description for the Lantern to be more clear\n-The Joystick control option is now off by default on mobile\n-The Corrupted Beastmaster's Stomp Confusion effect now makes your items look like Corrupted Beastmasters!\n\nFixes\n-Fixed Revenge Achievement to trigger more consistently\n-Fixed an edge case for the What's An Idle Game Achievement\n-Fixed spurious Chronosphere indicator in early game\n-Repaired save files with lost Pocket Mirror Traits\n-Fixed a visual bug with Falling Skies Cascade Perk\n-Fixed Limbo Perk Selections for Companions (once again!)\n-Fixed a bug with hide flying resources option"
    },
    {
      "date": "2022-12-09T19:33:30.193Z",
      "displayDate": "December 9, 2022",
      "body": "v5.1.5 [Steam / Android / iOS]\nChanges\n-Moved the unlock point for the Chalice, Slipstream, and Chaos Forge to be a bit sooner\n\nFixes\n-Fixed a bug causing the Chaos Forge to crash if you tried to Respec before Era 4\n-Fixed the Percent shown in the Chronosphere in the bottom left\n-Fixed issue with Spell Skins not always being applied correctly\n-Fixed missing Pocket Mirror traits\n-Fixed a bug with the Totem granting logic\n-Put a limit on the maximum hitbox size of the Wizard to keep them inside ofthe battlefield\n-Fixed a few rare and complex problems\n-You will now only submit scores to the Chalice if you have the Chalice"
    },
    {
      "date": "2022-12-10T11:19:56.730Z",
      "displayDate": "December 10, 2022",
      "body": "v5.1.6 [Steam / Android]\n-Fixed a critical bug impacting new players!"
    },
    {
      "date": "2022-12-11T03:26:48.008Z",
      "displayDate": "December 10, 2022",
      "body": "v5.1.7 [Steam / Android / iOS]\n-Fixed a bug introduced recently that could prevent the game from opening"
    },
    {
      "date": "2022-12-13T01:39:02.665Z",
      "displayDate": "December 12, 2022",
      "body": "v5.1.8 [Steam / Android / iOS]\n-Aaaand fixed another bug that could, in rare cases, crash the game on startup!"
    },
    {
      "date": "2022-12-14T14:24:59.457Z",
      "displayDate": "December 14, 2022",
      "body": "v5.1.9 [Steam / Android / iOS]\nChanges\n-Streamlined the Obelisk Shark window language and typography\n-Many windows now show how many of a resource you have besides the cost!\n-Changed the language of \"Research Cost Discount\" and \"Enchanting Discount\" to \"Cheaper Research\" and \"Cheaper Enchanting\"\n-Currency Bag renamed to Resource Pouch\n\nFixes\n-Fixed another crash issue related to skins (again!)\n-Fixed the UI alignment of costs in windows"
    },
    {
      "date": "2022-12-20T19:44:51.602Z",
      "displayDate": "December 20, 2022",
      "body": "v5.1.10 [Steam]\nFixed\n-Fixed a bug where respecing the chaos forge could sometimes eat a Respec Token\n-The Vase of Accumulation and Star of Wisdom will now more reliably give indicators when they can be upgraded\n-The Steam client will now refresh Chalice and Slipstream data upon day-rollover when the client is running. Note this will only occur when the Lantern is in Offline mode, that is, it will not occur if you are actively playing.\n-Fixed a bug related to quitting the game before a purchase fully completes!"
    },
    {
      "date": "2023-01-05T23:13:46.122Z",
      "displayDate": "January 5, 2023",
      "body": "v5.1.14-15 [Steam / Android / iOS]\nNew\n-All of the text in the game that was previously untranslated, has been translated using an auto-translation service. While not perfect, this should improve the understandability of the game for non-English speakers!\n\nChanges\n-The Ancient Tome will now indicate which Perks are currently selected (via the Spell Forge)\n-The Bestiary now indicates which enemies you are facing this Awakening\n-Cryo Prison Icy Execution has been nerfed\n-Lightning Orb Electromagnetism Perk has been buffed\n-Custom bags can now be increased in size to 7x8\n-[Steam] The Steam Custom Cursor is now x2 as large\n\nFixes\n-Fixed odd bug with legacy save files\n-Fixed Players missing the 4th forge bonus\n-Fixed a UI issue with the Vase\n-Fixed a bug making picking a companion is not mandatory in some cases\n-Fixed a bug with how some items auto-expand in size\n-Fixed the notification for the daily free Gold Bullion\n-Revised the description of the Elemental Equilibrium Achievement to say Rewind instead of Run\n-Clarified Deathtouch Runes to indicate that they only kill melee enemies"
    },
    {
      "date": "2023-01-08T15:44:43.396Z",
      "displayDate": "January 8, 2023",
      "body": "v5.1.16-17 [Steam / iOS / Android]\nChanges\n-You can now only have 1 copy of Professional. This Trait was just a bit more powerful than I anticipated, to the point that multiple copies throws can throw off the balance in multiple ways!\n\nFixes\n-Fixed a rare issue which could crash the game"
    },
    {
      "date": "2023-01-18T02:02:37.882Z",
      "displayDate": "January 17, 2023",
      "body": "v5.2.2 [Steam / Android / iOS]\nNew\n-The default layout and organization of items has been adjusted in order to help new players! There is now a Goals item and a Chrono Lord item; the Codex and Bag of Insight have been combined; and the Tap Wizard 2 item has been merged with the Settings item!\n-There is now a filter that will censor offensive usernames - unfortunate that this is even needed, but such is the internet!\n\nChanges\n-Augmenter now requires 3 hrs to trigger instead of 2 hrs\n-You will now gain Chaotic Essence even if you do not have the Chaos Forge!\n-The order of Companion spells is now consistent, and is determined by the position of the Companion items!\n-The Runic Utility Bag can now activate instant-use Runes!\n\nFixes\n-Fixed a critical memory leak related to the Slipstream Exchange\n-Fixed a problem with the location of the contents of special bags not being preserved\n-Fixed a bug with Advancer sometimes disabling when it should not\n-Potential fix for HUD status icons getting stuck\n-Fixed Limbo Companion choice creating an unneeded extra bag\n-Runic Utility Bag is once again 7x4 large\n-Fixed an edge case bug with unlockables\n-Fixed a bug with purchasing Circle of Choice while in Limbo\n-Fixed a bug with the cost of the Great Prism in some cases\n-Clarified the description of the Ancient Tree\n\nThe 4th Umbra Lord is coming very soon!"
    },
    {
      "date": "2023-01-22T05:26:05.260Z",
      "displayDate": "January 22, 2023",
      "body": "v5.2.4 [Steam / Android / iOS]\nNew\n-The 4th Umbra Lord, the Berserker Warlock, is now available for testing! To access the boss, enter the code \"beta\" in the Vault!\n\nFixes\n-Fixed the Advancer Trait\n-Fixed the number of Companion choices in Limbo\n-Fixed a recently introduced bug with the Silpstream\n-Fixed a bug with Copycat and respeccing\n-Fixed a bug with instant-effect Runes not being activated from the Runic Utility Bag (again)"
    },
    {
      "date": "2023-01-24T00:56:10.640Z",
      "displayDate": "January 23, 2023",
      "body": "v5.2.5 [Steam / Android]\nFixes\n-Fixed advancer...again!\n-Fixed bug with the Wand of Finding\n-Fixed description of Ring of Companion Status\n-Professional removed from the Traitful pool"
    },
    {
      "date": "2023-01-25T04:52:36.018Z",
      "displayDate": "January 24, 2023",
      "body": "v5.3.0 [Steam / Android / iOS]\nNew\n-The Berserker Warlock is now live! Face him at Awakening 39 or higher! And be carefully...he packs a punch!\n\nChanges\n-There is now a 1 minute cooldown on the XP gain of Enlightener.\n\nFixes\n-Fixed Advancer...again...third times a charm?! xD\n-Fixed a bug with Enlightener not reducing Cast Speed\n-Possible fix for Advancer skipping sometimes skipping bosses\n-Fixed being able to obtain the Cloak of the Time master in Era 1"
    },
    {
      "date": "2023-01-31T15:57:04.323Z",
      "displayDate": "January 31, 2023",
      "body": "v5.3.1 [Steam / Android / iOS]\nFixes\n-Fixed an issue with some older save file versions!\n-Fixed issue with the Wand of Finding UI!\n-Fixed a bug with the 4th Boss Fate crashing the game!\n-Removed the limitation of Fates in Era 5 not granting Awakening Rank!\n-Fixed a UI issue with Souls rounding at very high waves!\n-Fixed a memory leak related to Hud Notifications!\n-Fixed a minor exploit with the Enlightener Trait!"
    },
    {
      "date": "2023-02-03T21:40:43.165Z",
      "displayDate": "February 3, 2023",
      "body": "v5.3.2 [Steam / Android / iOS]\n-Fixed a bug preventing players from increasing their Awakening Rank in Era 5!"
    },
    {
      "date": "2023-02-05T02:00:08.770Z",
      "displayDate": "February 4, 2023",
      "body": "5.3.4 [Steam / Android]\nChanges\n-Nepotist nerfed. Dead. Killed: it no longer gives a bonus to Trove  Appearance Rate. It had to be done! Though I hope to buff it in some other way in a future update.\n-Added the ability to disable the Chalice if needed. There is currently an extended outage with the cloud service used to power the game's online component. Hopefully it comes back online soon!"
    },
    {
      "date": "2023-02-07T03:18:36.026Z",
      "displayDate": "February 6, 2023",
      "body": "v5.3.5 [Steam / Android / iOS]\n-Fixed a bug that could crash the game for new players!"
    },
    {
      "date": "2023-02-20T20:02:58.396Z",
      "displayDate": "February 20, 2023",
      "body": "v5.4.1 [Steam]\n-Trait Diary renamed to just Diary. When you select a Fate, it will now appear as an item in the Diary!\n-Fixed error where some old save files would get 2 Pocket Mirrors\n-Fixed a bug where the Chalice crashed the game when you are not logged in\n\nv5.4.3 [Steam]\nbeta\nIf you enter the code, \"Beta\" in the Vault, you will be able to join the Beta and test out the Trials feature! You will be able to complete 1 Trial during the beta. Enjoy!"
    },
    {
      "date": "2023-02-22T20:34:30.076Z",
      "displayDate": "February 22, 2023",
      "body": "v5.4.4 [Steam / Android]\nNew\n-The Chrono Trials feature is now available at Rank 7! This is a weekly event where you compete against other Chrono Lords as you complete tasks for rewards. There may be some bugs to work out during the first few events - thank you for your patience in advance!\n\nChanges\n-The Berserking Warlock's projectiles will now display over enemies\n\nFixes\n-Winter's Coil properly draws under enemies when the Spells on Bottom option is set"
    },
    {
      "date": "2023-02-24T13:58:22.109Z",
      "displayDate": "February 24, 2023",
      "body": "v5.4.5 [Steam / Android]\n-You must now choose a username before you can enter a Trial!\n-Fixed a UI bug in the Great Mirror"
    },
    {
      "date": "2023-02-24T16:52:01.083Z",
      "displayDate": "February 24, 2023",
      "body": "v5.4.6 [Steam]\n-Fixed a bug with the Trials Shop not being populated for some players!"
    },
    {
      "date": "2023-02-26T01:36:29.800Z",
      "displayDate": "February 25, 2023",
      "body": "v5.4.8 [Steam / Android]\n-Improved the description of the Trials Shop.\n-Fixed bug with claiming Trials rewards.\n-The \"Max Wave Beaten\" statistic has been fixed.\n-The menu bar text for resources items, like gold, will now update every second.\n\nThe Chrono Trials feature is largely a success!  Still waiting on iOS to get through review with it though..."
    },
    {
      "date": "2023-03-10T17:11:28.835Z",
      "displayDate": "March 10, 2023",
      "body": "v5.4.12 [Steam / Android / iOS]\nChanges\n-Increased Trials rewards for Standing!\n-Retribution cooldown decreased from 15 s to 12 s\n-The Preparation Trait now gives +1 Perks after reaching Era 4.\n-You will not lose any rewind-counts on Runes if you die within the first 10 seconds of a rewind\n-Made Shard Bolter's Ruination Perk available from Era 1 to help with Chrono Trials\n-Slightly increased Timeshard requirements to get to Eras 3 through 6\n\nFixes\n-Fixed bugs with certain Trials Tasks\n-Fixed bug with the Death's Companion Achievement\n-Added some code to repair certain types of corrupted save files\n-Fixed a bug which could resulted in negative movement speed and the Wizard leaving the arena\n-Fixed bugs with the Ghost Casters Fate\n-Fixed a bug that sometimes resulted in points not resetting when entering a trial\n-Fixed a bug with the Wand of Finding UI\n-Fixed bug with Traitsplosion\n-Fixed edge case bug where rerolling perks may result in the same perk if there are more than 3 perk options\n-Fixed a bug preventing Death's Companion from triggering\n-Toxic Spores will now properly be on the ground under enemies when the SpellsOnBottom option is on.\n-The Grim Potion will more reliably work with high dodge chance!\n\nNote: The Trials Shop will refresh upon getting this update!\nEra 6 is in the works and should be released this month!"
    },
    {
      "date": "2023-03-23T12:16:26.150Z",
      "displayDate": "March 23, 2023",
      "body": "v5.4.13 [Steam]\nBalance Changes\n-Toxic Spray Volatile Poison and Condensation perks buffed\n-Static Arc Spark perk buffed\n-Eruption damage increased by 40%\n-Eruption now has a base delay of 1.0 s\n-Eruption Status Affinity secondary eruption delay increased from 0.5 s to 1.0 s\n-Fuming Sprites Slayer perk buffed\n-Fuming Sprites Directed Fumes perk cooldown reduced\n-Fuming Sprites Purity perk base amount buffed and scaling has greatly increased\n\nChanges\n-The Unfortunate Demise achievement now only requires that the Vertigo Rune is in use, not that the player be upside down\n-Reduced task requirements for some Trials Tasks\n-Adjusted the icon for Singular Focus\n-The condition for Uphill Battle is now that you have not defeated a Boss in the prior Rewind\n\nFixes\n-Fixed a bug with Ice Golem not respecting the Spell Object Limit\n-Fixed an issue which could crash the game if you lose network connection while awakening\n-You can no longer get singleton Traits from the Runic Table\n-Completing a Trials Fate will update the Fate Icon in the Book of Fate right away\n-Fixed issue with linking to steam and the offerwall\n-Put in some failsafe code that will protect against game corruption and/or bad behavior caused by certain bugs\n-Fixed Acrobatics icons getting sometimes stuck onscreen\n-Fixed bugs with Master Reclaimer causing the bonus to sometimes stack\n-Ghost Casters has been fixed to no longer warp the wizard around in certain conditions\n-Advancer will no longer skip waves that you have not yet beaten\n-Fixed a recently introdued bug causing the game to lag sometimes\n-The Grim Potion will now always kill you, for sure! xD"
    },
    {
      "date": "2023-03-24T14:09:19.400Z",
      "displayDate": "March 24, 2023",
      "body": "v5.4.14 [Steam / Android / iOS]\n-Fixed a bug introduced in the last version!\n-Changed the Vengeance Task to Activate Lantern!"
    },
    {
      "date": "2023-04-05T13:23:32.405Z",
      "displayDate": "April 5, 2023",
      "body": "v6.0.10 [Steam / Android / iOS]\nEra 6 is here!\nIt increases the maximum Awakening Rank from 50 to 60 and introduces a ton of new content, including:\n-The Bowl of Fate, which lets you mix 2 Fates together and earn Tears of Fate\n-New Trait Seeds and Empowered Stars from the Star of Wisdom, which modify your Perk Selections\n-An all new Memory Tree stage much different from prior ones!\n-Two new tough-as-nails enemies, the Arbalest and the Iron Minotaur!\n-New Traits, Runes, and Terrains!\n-New in-game Achievements to unlock!\nDon't hesitate to report any bugs or feedback!\n\nOther Changes\n-Changed the Glass Cannon achievement to only trigger when getting hit by a melee attack\n-Can no longer remove keys from the Trials Shop\n-Can add Trials Keys back into the Trials Shop\n-Fixed a bug preventing you from awakening if you didn't have network connection\n-Difficult of waves 275+ has been increased"
    },
    {
      "date": "2023-04-06T13:45:14.004Z",
      "displayDate": "April 6, 2023",
      "body": "v6.0.13 [Steam / Android / iOS]\nBug Fix update!\n-Get Bowl of Fate right away after Kindling now\n-Fixed a bug with mounts in the shop\n-Clarify the wording on Tears of Fate a bit\n-Fixe the Perk Master Fate, and reset it\n-Fixed issues with the Bowl of Fate and boss fates\n-Fixed the Trait Collector Achievement not stating the requirement\n-Improved some things related to ice golem\n-Fixed a bug with the Telekenisis Rune"
    },
    {
      "date": "2023-04-07T13:54:14.030Z",
      "displayDate": "April 7, 2023",
      "body": "v6.0.14-15 [Steam / Android / iOS]\nAnother bug fix update, fixing one critical bug related to awakening with Fates! Before getting this update, I recommend to restart the App after Awakening or Feather Dusting."
    },
    {
      "date": "2023-04-11T13:22:02.368Z",
      "displayDate": "April 11, 2023",
      "body": "v6.0.16 [Steam / Android / iOS]\nChanges\n-You now have 5 Options for Traits with the Trait Seed\n-The Star of Wisdom now grants 1 additional Mana Star at Level 39\n-Difficulty post wave 275 has been reduced, and smoothed out (increases slower\n-Companion Perks no longer scale with Perk Fairy\n\nFixes\n-Fixed Acceleration not working\n-I Am Vengeance will trigger Trials tasks properly\n-You can now re-arrange fates in the Trials Fates bag\n-Fixed a bug with Companions\n-Fixed a bug preventing Fates from being Fulfilled if they were the second Fate selected in the Bowl of Fate\n-Fixed trewind!\n-Fixed bug preventing Trial Group from refreshing when it should\n-Fixed a bug with Perk Fairy that allowed for XP to overflow past the normal 3 level cap\n-Fixed a bug related to XP gain when you gained a lot of XP at once\n-Made it so that you can't Focus in Era 6 until you are Rank 50\n-Empowered Star choices now respect your Perk selections"
    },
    {
      "date": "2023-04-25T13:37:15.376Z",
      "displayDate": "April 25, 2023",
      "body": "v6.0.18 [Steam / Android / iOS]\nChanges\n-Companion Perks will now once again scale with Perk Fairy!\n-Made the \"Empowered\" text larger when you are using an Empowered Star\n\nBalance Changes\n-All Trials Tasks are easier (except for the Awaken one)!\n-Raw Memory nodes buffed\n-Nochanter bonus increased to 5%\n-Feast and Famine cast speed bonus increased to 125%\n-Specialist Mark 2 Bonus increased to 170%\n-Temporal Adjustment bonus increased to x1.1\n-You can no longer get Perk or Trait Runes from the Runic Table\n-You can now use Q2 Runes with Fountain of Runes, but you cannot use Vertigo or For Gems and Glory [Bugged, will be in the next update!]\n\nFixes\n-Fixed a bug with Totemic Apprentice\n-If you can use an Empowered Star and pick a Perk which can't be used with Empowered Star, it will not reset the Level counter for the Empowered star\n-Fixed Empowered Stars not saving\n-Fixed a bug with Trait Seeds\n-Fixed a bug when choosing Preparation from a Trait Seed\n-Fixed Empowered Star being able to push Perks past the intended limit.\n-Ranged enemies should travel farther into the battlefield and be less likely to get stuck outside of it\n-Fixed a bug with blank Rune Icons\n-Fixed a bug with Copycat destroying too many Traits when you lose it\n-Fixed a few issues with some Fates"
    },
    {
      "date": "2023-05-08T15:37:05.509Z",
      "displayDate": "May 8, 2023",
      "body": "v6.0.19 [Steam / Android / iOS]\nChanges\n-You can now disable only the Passive Enchanting component of the Spirit Engine\n-You can now disable the Auto Funding of the Spirit Engine while keeping Auto Research on (so only auto start and complete)\n-Staff Levels gained while offline will count towards Trial Tasks\n-You can now use Q2 and above runes in Fountain of Runes\n-You can now disable the Temporal Adjustment Trait\n\nFixes\n-Fixed spell skins not always being applied for Companion Spells\n-Fixed a bug with Wizard Battle\n-Fixed a bug with Trials Shop Fates being able to be removed\n-You should now get Trials Rewards after the Trial finishes without needing to restart the game\n-Fixed a bug with Unstable Amplification"
    },
    {
      "date": "2023-08-11T22:19:37.587Z",
      "displayDate": "August 11, 2023",
      "body": "v6.1.0 [Steam / Android / iOS]\nNew\n-The Era 5 Boss, the Molten Amalgamation, is now available! Defeat it to earn the Runic Quill!\n\nFixes\n-Fixed Ice Beam Reflection perk\n-Fixed a bug sometimes preventing multiple copies of Totemic Shadow from proccing\n-The skin for Toxic Spray now properly changes the graphic for Poison Droplets\n-(3 or 4 other fixes were also made, but the changes notes for them got lost!)"
    },
    {
      "date": "2023-08-23T14:44:30.445Z",
      "displayDate": "August 23, 2023",
      "body": "v6.1.1 [Steam / Android / iOS]\nFixes\n-Fixed the Shark Skin!\n-Fixed a bug related to Trait Seeds.\n\nThe next big update will be the final boss of the game at the end of Era 6!"
    },
    {
      "date": "2023-10-14T21:53:36.547Z",
      "displayDate": "October 14, 2023",
      "body": "v6.1.2 [Steam / iOS / Android]\n-This update includes the Jack-o-wizard and Turkey Blaster Seasonal Skins!"
    },
    {
      "date": "2023-12-21T15:06:35.721Z",
      "displayDate": "December 21, 2023",
      "body": "v7.0.0 [Steam / Android / iOS]\n-Umbra Lord 6, The Doomstone, is now available after reaching Awakening Rank 60!\n-This is the final boss of the game, and should be quite a challenge to defeat - but many rewards await as well!"
    },
    {
      "date": "2023-12-25T03:36:06.986Z",
      "displayDate": "December 24, 2023",
      "body": "v7.0.1 [Steam Beta]\nBug Fixes\n-Fixed a bug with the Cryo Prison Ruination Perk activating at the opposite time\n-Fixed a crash that could occur when you selected Fateless\n\nBug Fixes related to Boss 6:\n-Garry the Gnome will now reset after beating the Boss!\n-Fixed a bug with the Energized Coin Box\n-Reset the fastest awakening time to pre boss fight value\n-Fixed bug with mirror count\n-Fixed the final cutscene text\n-Fixed the number of spirit orbs after beating the Boss\n-Items can now be removed from the Doomstone Shard\n-Fixed issue when fighting the Doomstone\n-Fixed bug with getting copies of Totems when you shouldn't"
    },
    {
      "date": "2023-12-28T20:05:45.453Z",
      "displayDate": "December 28, 2023",
      "body": "v7.0.2 [Steam / Android / iOS]\nChanges\n-Final boss difficulty reduced a bit!\n\nBug Fixes\n-Fixed a bug introduced in v7.0.1"
    },
    {
      "date": "2024-01-04T15:58:29.370Z",
      "displayDate": "January 4, 2024",
      "body": "v7.0.3 [Steam / Android / iOS]\nBug Fixes\n-Fixed Cold Determination not playing when music is on Shuffle past Era 3\n-Fixed Talking Hat rank 5\n-Revised description for the Doomslayer Achievement before you complete it\n-Fixed the Spyglass!"
    },
    {
      "date": "2024-01-17T18:00:46.512Z",
      "displayDate": "January 17, 2024",
      "body": "v7.1.0 [Steam / Android / iOS]\nChanges\n-Ring of Preparation now instead grants you 1 Mana Star upon exiting Limbo.\n\nBug Fixes\n-Fixed a bug with the Doomstone fight\n-Attempted a fix for Umbra Lords dying in 1 hit\n-Fixed the Quill\n-Q1 Vertigo Runes are fixed, they will now give gems again!\n\nBalance Changes\nFire Storm\n-Bloodthirst Chaos status effect level tripled and there is no longer a chance to proc\n-Base Damage increased by 25%\n-Mega Fireballs damage increased\n\nCyro Prison\n-Fixed a bug with Icy Execution causing a single prison to execute multiple enemies\n\nIonic Charger\n-Base Cooldown decreased by 30% and Base DPS increased by 10%\n-Vengeance damage increased\n\nVoltaic Swords\n-Ruination acceleration base value increased, and scaling reduced\n-Status Affinity hp percent starts higher and has a higher max value\n\nFalling Skies\n-Icy Compensation no longer Rushes other copies of Falling Skies, the maximum enemies that can be hit to trigger it is reduced by 50%, and it only Rushes a single random other spell.\n\nWinter's Coil\n-Patience: damage scaling is lower (1/3 at top end), the chance per hit is reduced to 5%, the size is always +50%, and the maximum chance description is fixed to say 25%, ."
    },
    {
      "date": "2024-01-17T18:00:47.614Z",
      "displayDate": "January 17, 2024",
      "body": "__\nFiery Deluge\n-Ruination damage starts higher\n-Loyal Flames damage increased\n-Elemental Overload fireball damage increased by 50%\n\nCryo Prison\n-Secondary Prisons can no longer use Icy Execution\n\nFlarefish\n-Luminous Aura acceleration amount doubled.\n\nJolting Sprites\n-Status Affinity bonus increased significantly, and scaling increased\n\nRing of Death\n-Extended Toxin damage dramatically increased, the slow duration increased to 2 s, the base chance increased to 20%, and max Perk level increase to 15\n-Toxic Blender damage increased\n\nLightning Orb\n-Static Attraction duration increased to 3 s and the damage increase dramatically\n-Status Affinity now increases damage on each pierce\n-Patience totally reworked: the zap is now transformed into a new, bigger, more damaging zap\n-Zap Rate decreased by 50% (DPS unchanged)"
    },
    {
      "date": "2024-01-26T21:26:45.881Z",
      "displayDate": "January 26, 2024",
      "body": "v7.1.1 [Steam Beta]\nChanges\n-You can now resize the Perk Bag (the container for perks in the Staff of Knowledge)!\n-The Runic Quill will now only accept Runes\n\nBug Fixes\n-Using the Wand of Chaos will now properly refresh the Staff of Knowledge window!\n\nBalance Changes\nJolting Sprites\n-Status Affinity reduced\n\nLightning Golem\n-Special Attack is changed to be time-based like Fire Golem, and it will now fire in addition to the normal cast\n-Electric Presence base Damage multiplied by x4, and the damage now scales with the number of projectiles in the next cast\n-Status Affinity buffed\n-Static Revenge buffed and capped at Level 10\n\nVoltaic Viper\n-Elemental Overload damage increased\n-Out of the Den threshold now starts at 5%, increases faster, and the max perk level is 16\n-Coiled Strike reworked: it now deals based on how long since the last totem or trove pickup.\n\nFiery Beams\n-Elemental Overload threshold reduced to 10 enemies\n-Beam Sequencing max level increased to 10, the chance starts at 50%, and the damage is doubled.\n\nFire Golem\n-Fiery Presence projectile count reduced, damage increase significantly\n-Status Affinity: now also deals X% More Damage, and the execution threshold starts higher and scales faster\n\nFuming Sprites\n-Elemental Purity reworked: it is deals ESE damage instantly and extends ESE duration."
    },
    {
      "date": "2024-01-29T17:17:40.000Z",
      "displayDate": "January 29, 2024",
      "body": "v7.1.2 [Steam / Android / iOS]\nBalance Changes\n-Cleansing Touch now only has a 10% chance to activate and deals x2 damage when it does\n\nFire Stream\n-Status Affinity scaling increased and it only reduces ESE duration by half the amount.\n\nFlarefish\n-Ruination damage increased"
    },
    {
      "date": "2024-02-12T15:32:36.079Z",
      "displayDate": "February 12, 2024",
      "body": "v7.2.1 [Steam / Android / iOS]\nNew\n-The Paradox Gate is now available! This is an endgame system that provides extra challenge and minor rewards. It is available after defeating the Doomstone.\n\nFixes\n-Fixed Lightning Orb Patience\n-Fixed a bug with the Energized Book of Fate\n-Fixed description of Cleansing Touch\n-Fixes the chance on Loyal Flames to be 100% at level 10\n-Fixed description of Fuming Sprites Toxic Proliferation\n\nChanges\n-Iron Minotaur changed: it cannot be damaged by Elemental Status Effects and its attacks cannot be dodged.\n-Cost to Refresh Bowl of Fate increased to 20\n-The level of the Fox Totem Status Effect scales with Wizard Level\n-Jolting Sprites Status Affinity buffed slightly"
    },
    {
      "date": "2024-03-23T17:47:35.652Z",
      "displayDate": "March 23, 2024",
      "body": "v7.3.0 [Steam]\nNew\n-The final Steam Achievements are now available! Yahoo!\n\nChanges\n-Acrobatics can now grant its movement bonus even if the wizard already dodged that hit\n-Increased the scaling of the Quantum Tunneling perk\n-Improved the popup message about Imperfect Fates for the Paradox Gate\n\nFixes\n-Fixed a very common and very sneaky bug that could crash the game!\n-Fixed a visual bug with acrobatics\n-Fixed the sound FX when dropping an item\n\nThis is a Steam-only update - v7.3.1 will be coming soon to all platforms!"
    },
    {
      "date": "2024-04-13T18:10:23.555Z",
      "displayDate": "April 13, 2024",
      "body": "7.3.3 [Steam / Android / iOS]\nChanges\n-The Offerwall has been totally changed on mobile - it should work now and have better offers!\n-The Seasonal sale item will now show a preview of the special skin!\n-There is a new option to disable research and totem FX\n-A sound FX now plays when you Level Up the Staff of Power\n-The maximum cooldown on Garry has been reduced\n-The bonus damage from Raw Attraction increase to 20%, and the pull effect is now unconditional.\n-Finished text localizations for missing entries!\n\nFixes\n-Fixed a bug with the timekeeping system\n-Fixed a crash that could happen when refreshing the bowl of fate\n-Fixed a bug with the Staff of Power at the start of the game"
    },
    {
      "date": "2024-12-31T19:10:02.466Z",
      "displayDate": "December 31, 2024",
      "body": "7.4.0 [Steam / Android / iOS]\n-There is a new option to downgrade the Star of Wisdom at high level!\n-Fixed a text overflow issue"
    },
    {
      "date": "2025-01-06T14:43:27.588Z",
      "displayDate": "January 6, 2025",
      "body": "7.4.6 [Steam / Android  / iOS ]\n-Fixed I Am Vengeance stopping the Elemental Purity Trials Task from triggering or working\n-Updates some backend libraries"
    },
    {
      "date": "2025-07-15T20:57:04.069Z",
      "displayDate": "July 15, 2025",
      "body": "v7.5.0 [Steam / Android / iOS ]\n-Enjoy the Neon Spellslinger wizard skin and checkout Neon Spellstorm!\n-Excess Jagged Totems will now convert into 1 Magic Dice.\n-Garry's and Nick's cooldowns have been capped at 7 days.\n-The maximum possible Wave has been increased from 1,000 to 2,000!"
    },
    {
      "date": "2025-08-08T21:07:18.245Z",
      "displayDate": "August 8, 2025",
      "body": "7.5.2 [Steam / Android / iOS]\n-Fixed the wave cap increase from the last update...hopefully it works up to 2k this time!"
    }
  ],
  "wizup": [],
  "grim-rpg": [],
  "simple-rpg": [],
  "tap-wizard": [],
  "ninja-prime": [],
  "idle-loot-quest": [],
  "idle-brain-quest": [],
  "idle-quest": []
};
