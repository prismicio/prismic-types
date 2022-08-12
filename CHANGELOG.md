# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.2](https://github.com/prismicio/prismic-types/compare/v0.2.1...v0.2.2) (2022-08-12)


### Documentation

* fix changelog ([3bbf6dd](https://github.com/prismicio/prismic-types/commit/3bbf6dd4e9212daacd65bae643594d0dd799fabb))

### [0.2.1](https://github.com/prismicio/prismic-types/compare/v0.2.0...v0.2.1) (2022-08-05)


### Features

* simplify `ImageField` ([#46](https://github.com/prismicio/prismic-types/issues/46)) ([d3c7369](https://github.com/prismicio/prismic-types/commit/d3c7369aff7c709c04ac2046a16b2385d5c064be))

### [0.2.1-alpha.1](https://github.com/prismicio/prismic-types/compare/v0.2.1-alpha.0...v0.2.1-alpha.1) (2022-08-02)


### Refactor

* slice `slice_id` to `id` ([8a451e7](https://github.com/prismicio/prismic-types/commit/8a451e7712d7e445675e303ec05c0a11fdf9bc05))


### Chore

* **release:** 0.2.1-alpha.1 ([eb1edc4](https://github.com/prismicio/prismic-types/commit/eb1edc44b1b38dc95679b1e559c02ae886b6ff92))

### [0.2.1-alpha.0](https://github.com/prismicio/prismic-types/compare/v0.2.0...v0.2.1-alpha.0) (2022-07-28)


### Features

* support slice ID ([090f67f](https://github.com/prismicio/prismic-types/commit/090f67faee8e515e6d38d03880d47fdd3b615705))


### Chore

* **release:** 0.2.1-alpha.0 ([973d4b9](https://github.com/prismicio/prismic-types/commit/973d4b975b34fb4016010e888ac4ab29cd42b9e3))
* update release script ([0724440](https://github.com/prismicio/prismic-types/commit/0724440c7f041f0bab8e170b8e57c39e5a6d9345))

## [0.2.0](https://github.com/prismicio/prismic-types/compare/v0.1.29...v0.2.0) (2022-07-08)


### ⚠ BREAKING CHANGES

* update model type definitions to match `@prismicio/types-internal` (#43)

### Features

* update model type definitions to match `@prismicio/types-internal` ([#43](https://github.com/prismicio/prismic-types/issues/43)) ([e283d99](https://github.com/prismicio/prismic-types/commit/e283d9994d34ba50b1c05bc4996dcff887168a30))


### Bug Fixes

* add `imageUrl` to `SharedSliceModelVariation` ([#42](https://github.com/prismicio/prismic-types/issues/42)) ([f7c39e3](https://github.com/prismicio/prismic-types/commit/f7c39e38ead6aae8527dd07259359f6fab610c9f))

### [0.1.29](https://github.com/prismicio/prismic-types/compare/v0.1.28...v0.1.29) (2022-06-13)

### [0.1.28](https://github.com/prismicio/prismic-types/compare/v0.1.27...v0.1.28) (2022-06-09)


### Bug Fixes

* add `[@deprecated](https://github.com/deprecated)` tag to `slugs` document property ([#36](https://github.com/prismicio/prismic-types/issues/36)) ([d5951ca](https://github.com/prismicio/prismic-types/commit/d5951ca299d6c56dad9f0eb62ac83f5f4935be28))
* correct `IntegrationFields` to not use the Integration Fields API shape ([#40](https://github.com/prismicio/prismic-types/issues/40)) ([33b8e24](https://github.com/prismicio/prismic-types/commit/33b8e2414de5f56b09b5dbe95ef28d17468c1104))


### Chore

* **deps:** upgrade dependencies ([c44af72](https://github.com/prismicio/prismic-types/commit/c44af7237c7e309e00210c31ee3d7da721429cef))
* upgrade to latest Prismic package standards ([#37](https://github.com/prismicio/prismic-types/issues/37)) ([97714c3](https://github.com/prismicio/prismic-types/commit/97714c350076dac4a77ff1be0d426ccc07f4bc91))

### [0.1.27](https://github.com/prismicio/prismic-types/compare/v0.1.26...v0.1.27) (2022-03-03)


### Bug Fixes

* `ImageField` should be a valid `ImageFieldImage` extension ([#32](https://github.com/prismicio/prismic-types/issues/32)) ([87681d4](https://github.com/prismicio/prismic-types/commit/87681d454dc057a125cdcb508a3a83e13c0a12ab))
* image thumbnail state should be the same as the master image ([82ee5c6](https://github.com/prismicio/prismic-types/commit/82ee5c68a32c7a7d31dfce89a8b67f22437d0c82))

### [0.1.26](https://github.com/prismicio/prismic-types/compare/v0.1.25...v0.1.26) (2022-02-28)


### Bug Fixes

* support union with image thumbnails, fixes [#27](https://github.com/prismicio/prismic-types/issues/27) ([#29](https://github.com/prismicio/prismic-types/issues/29)) ([32d0a9a](https://github.com/prismicio/prismic-types/commit/32d0a9a1fb06a2629ff4e1627e8c23a24964afd6))

### [0.1.25](https://github.com/prismicio/prismic-types/compare/v0.1.24...v0.1.25) (2022-02-18)


### Bug Fixes

* **fields:** api can yield an empty string for keytext field in certain cases ([#26](https://github.com/prismicio/prismic-types/issues/26)) ([70fec9f](https://github.com/prismicio/prismic-types/commit/70fec9fae71ea895fd1c9fa072ee2d37de9c217e))


### Chore

* **deps:** update dependencies ([ca8fe00](https://github.com/prismicio/prismic-types/commit/ca8fe00a2248097d8da66895fdaae66967c3be47))
* update license ([0695135](https://github.com/prismicio/prismic-types/commit/0695135c671c5404e0358581d208430f7518ba75))

### [0.1.24](https://github.com/prismicio/prismic-types/compare/v0.1.23...v0.1.24) (2022-02-09)


### Features

* **document:** use looser default data ([60e0283](https://github.com/prismicio/prismic-types/commit/60e0283569d623d99373f9881e4053bbcbca4942))


### Refactor

* **fields:** use oembed specs for embed field ([#24](https://github.com/prismicio/prismic-types/issues/24)) ([8e254a2](https://github.com/prismicio/prismic-types/commit/8e254a29054f40dcd9aa0fc0472c36dbdde01530))

### [0.1.23](https://github.com/prismicio/prismic-types/compare/v0.1.22...v0.1.23) (2022-02-03)


### Features

* support unknown `EmbedField` properties by default ([#23](https://github.com/prismicio/prismic-types/issues/23)) ([de4880d](https://github.com/prismicio/prismic-types/commit/de4880d8f3f8956e6d2871c6c6935616e3393009))

### [0.1.22](https://github.com/prismicio/prismic-types/compare/v0.1.21...v0.1.22) (2022-01-28)


### Chore

* support React Native's Metro bundler ([aed51a3](https://github.com/prismicio/prismic-types/commit/aed51a36e684ad716f50a4e140bb9371e42721f5))

### [0.1.21](https://github.com/prismicio/prismic-types/compare/v0.1.20...v0.1.21) (2021-12-20)


### Features

* add PrismicDocumentWithUID and PrismicDocumentWithoutUID ([49b4f1b](https://github.com/prismicio/prismic-types/commit/49b4f1b599fa2a48d728d8ba3a02e52767a05e0d))
* add webhook types ([60d709d](https://github.com/prismicio/prismic-types/commit/60d709d803e884c372179f39217b5b832a68d0f9))


### Refactor

* webhook types ([38b1b03](https://github.com/prismicio/prismic-types/commit/38b1b03e78f70bb37fae674c978170e1b13787cc))

### [0.1.20](https://github.com/prismicio/prismic-types/compare/v0.1.19...v0.1.20) (2021-12-16)


### Bug Fixes

* constrict `SelectField` values to `string` ([ac1a973](https://github.com/prismicio/prismic-types/commit/ac1a973a94c2615379b998a2d4a49849db876a61))
* filled Group and Slice Zone fields contain at least one element ([f60a20e](https://github.com/prismicio/prismic-types/commit/f60a20e9ac0e9cf267cc279c3dc5c39376d3eade))

### [0.1.19](https://github.com/prismicio/prismic-types/compare/v0.1.18...v0.1.19) (2021-12-03)


### Chore

* **deps:** maintain dependencies ([c2a2a6c](https://github.com/prismicio/prismic-types/commit/c2a2a6c40cd00d85b838dda1e0374ff34a52431d))

### [0.1.18](https://github.com/prismicio/prismic-types/compare/v0.1.17...v0.1.18) (2021-11-17)


### Bug Fixes

* prevent compatibility issues with enum types ([#18](https://github.com/prismicio/prismic-types/issues/18)) ([508fb73](https://github.com/prismicio/prismic-types/commit/508fb73ff2806b669c3292aaf6c40c780a551c59))

### [0.1.17](https://github.com/prismicio/prismic-types/compare/v0.1.16...v0.1.17) (2021-11-04)


### Bug Fixes

* correct Title block spans field ([912359b](https://github.com/prismicio/prismic-types/commit/912359bbbcfac45b37180ad385a3aa00aa84526d))

### [0.1.16](https://github.com/prismicio/prismic-types/compare/v0.1.15...v0.1.16) (2021-11-04)


### Features

* support stateful Rich Text and Title fields ([367ea03](https://github.com/prismicio/prismic-types/commit/367ea0392374375bc51bef09d6de1af366adbb7e))


### Bug Fixes

* narrow link `data` field type ([3c7fdca](https://github.com/prismicio/prismic-types/commit/3c7fdca99a657953772af30e5bfc1dd21f559705))


### Chore

* maintain template ([b17ae84](https://github.com/prismicio/prismic-types/commit/b17ae8460c21aa16172d826e954488c2268720b0))
* separate type tests into `types` script ([d4ea1e9](https://github.com/prismicio/prismic-types/commit/d4ea1e96194f2467fa59166bf3c0a52f0156174f))

### [0.1.15](https://github.com/prismicio/prismic-types/compare/v0.1.14...v0.1.15) (2021-10-12)


### Features

* add `State` generic to field types ([#13](https://github.com/prismicio/prismic-types/issues/13)) ([368d968](https://github.com/prismicio/prismic-types/commit/368d968f289a09708da488842840d302735797ec))
* add ThumbnailNames generic to CustomTypeModelImageField ([28b58a0](https://github.com/prismicio/prismic-types/commit/28b58a09069f83f7fc8b08a0a14b9decb015913b))
* export `FieldState` ([97cee39](https://github.com/prismicio/prismic-types/commit/97cee39e0e251ceee96e0436bcbb0fcbc4999e88))


### Chore

* **deps:** update dependencies ([646a4ce](https://github.com/prismicio/prismic-types/commit/646a4ceed66311a53106ea548cb89873c2d6fabe))
* mark package as side effect free ([8ad52cf](https://github.com/prismicio/prismic-types/commit/8ad52cf7292ac93753a5d8e64ff079dbd5f821e3))
* sort package.json ([7e233f3](https://github.com/prismicio/prismic-types/commit/7e233f3c54c04e0fba5e3942f023635de00ba334))

### [0.1.14](https://github.com/prismicio/prismic-types/compare/v0.1.13...v0.1.14) (2021-10-05)


### Documentation

* add graphql and document field TSDocs ([#12](https://github.com/prismicio/prismic-types/issues/12)) ([ff2c36e](https://github.com/prismicio/prismic-types/commit/ff2c36e6337bd8cc88a464bb46cd0b45f1bd474b))


### Chore

* prettier ignore CHANGELOG ([ada0e7b](https://github.com/prismicio/prismic-types/commit/ada0e7b7b10f325a57979d454755dcaa8df803d1))

### [0.1.13](https://github.com/prismicio/prismic-types/compare/v0.1.12...v0.1.13) (2021-09-23)


### Bug Fixes

* use non-const enum for Element ([ddae971](https://github.com/prismicio/prismic-types/commit/ddae971353602a27cee4341ea50554570c8a2de7))

### [0.1.12](https://github.com/prismicio/prismic-types/compare/v0.1.11...v0.1.12) (2021-09-14)


### Chore

* update dependencies ([97aabd6](https://github.com/prismicio/prismic-types/commit/97aabd6df80e05ec3a3a572b116bf5ec5f405993))

### [0.1.11](https://github.com/prismicio/prismic-types/compare/v0.1.10...v0.1.11) (2021-09-14)


### Features

* add empty/filled Image field ([a05bb5d](https://github.com/prismicio/prismic-types/commit/a05bb5d5eed1e3a4c7343678cf30c661cc3684c4))


### Bug Fixes

* type ImageField as nullable ([3f60434](https://github.com/prismicio/prismic-types/commit/3f6043436cc9da0a6da0ead7e6acb7736e8b6276))

### [0.1.10](https://github.com/prismicio/prismic-types/compare/v0.1.9...v0.1.10) (2021-08-20)


### Features

* add REST API V2 types ([083b61a](https://github.com/prismicio/prismic-types/commit/083b61aeaab9204dd32ff458daca262727381fda))
* add Tags API ([dc02c94](https://github.com/prismicio/prismic-types/commit/dc02c94a6fcb806713bb11655400dc4291665294))


### Bug Fixes

* export API types using `export type` ([b4a9565](https://github.com/prismicio/prismic-types/commit/b4a95651bc1077c281c39d531cefc9d10825f9ce))

### [0.1.9](https://github.com/prismicio/prismic-types/compare/v0.1.8...v0.1.9) (2021-08-19)


### Features

* export ImageFieldImage ([76727ec](https://github.com/prismicio/prismic-types/commit/76727ec727608c264de668e04dc08e28edd0f4d2))


### Bug Fixes

* use standard "Integration Fields" name ([8f303d2](https://github.com/prismicio/prismic-types/commit/8f303d206f1add405d17aab19ffcb57e00894168))

### [0.1.8](https://github.com/prismicio/prismic-types/compare/v0.1.7...v0.1.8) (2021-08-19)

### [0.1.7](https://github.com/prismicio/prismic-types/compare/v0.1.6...v0.1.7) (2021-08-19)


### Features

* export AlternateLanguage ([2cbf907](https://github.com/prismicio/prismic-types/commit/2cbf907ea903b5490c2d8806fea288c09abf742b))
* type image thumbnails ([76c21a9](https://github.com/prismicio/prismic-types/commit/76c21a9fb2c2ee86fa37af2361ec695dfdc1c47a))


### Chore

* add TSDoc plugins for ESLint and Prettier ([4ad8db0](https://github.com/prismicio/prismic-types/commit/4ad8db0ac8b7752d32ffa129def3014e265b5163))


### Documentation

* add TSDoc to document types ([#9](https://github.com/prismicio/prismic-types/issues/9)) ([cffda1b](https://github.com/prismicio/prismic-types/commit/cffda1b974eb6695c56b2fbfdcc5a5893cf616c3))
* add TSDoc to field types ([#11](https://github.com/prismicio/prismic-types/issues/11)) ([eea1934](https://github.com/prismicio/prismic-types/commit/eea19343278fca7082bd1e7860464817fbc1d65e))
* add TSDoc to GraphQL types ([#10](https://github.com/prismicio/prismic-types/issues/10)) ([a8d627d](https://github.com/prismicio/prismic-types/commit/a8d627dba63c34a4a116cda8921372c4f0ca4e33))
* fix link formatting ([dc81d81](https://github.com/prismicio/prismic-types/commit/dc81d8144acef6e5de813fbef754abdfd277aa50))

### [0.1.6](https://github.com/prismicio/prismic-types/compare/v0.1.5...v0.1.6) (2021-08-11)


### Bug Fixes

* add customtypes and tags to CustomTypeModelContentRelationshipField ([c274837](https://github.com/prismicio/prismic-types/commit/c274837f3fabbf8cc1d94c3b3bf6af9caddf1e69))
* allow null alt on Rich Text image blocks ([e531e2c](https://github.com/prismicio/prismic-types/commit/e531e2ceb01f37d218d6cb64f472339dc993704d))
* export CustomTypeModelDefinition ([79a5011](https://github.com/prismicio/prismic-types/commit/79a5011d9de153b4f4dfd143cdfacf7f127c1877))
* normalize Rich Text embed block with Embed field ([14f32ff](https://github.com/prismicio/prismic-types/commit/14f32ff20cf802d3981dbb570a16600f9b6461bb))
* use more flexible Option generic for CustomTypeModelSelectField ([6eaeba4](https://github.com/prismicio/prismic-types/commit/6eaeba4526858d1396709f7800902b84952ea7f4))


### Chore

* remove unused type ([c36bdae](https://github.com/prismicio/prismic-types/commit/c36bdae9234f7008dc61081b7a6500116b12eed6))

### [0.1.5](https://github.com/prismicio/prismic-types/compare/v0.1.4...v0.1.5) (2021-08-04)


### Features

* add CustomTypeModelDefinition and restructure CustomTypeModel ([453328c](https://github.com/prismicio/prismic-types/commit/453328cbec33770b66c4be1043d775a8c926932b))

### [0.1.4](https://github.com/prismicio/prismic-types/compare/v0.1.3...v0.1.4) (2021-07-14)


### Bug Fixes

* export SharedSlice and SharedSliceVariation ([02498d3](https://github.com/prismicio/prismic-types/commit/02498d3a2dcaabfb95079fff44e6ab931a4cfb1c))

### [0.1.3](https://github.com/prismicio/prismic-types/compare/v0.1.2...v0.1.3) (2021-07-14)


### Features

* add SharedSlice and SharedSliceVariation ([cd9db5f](https://github.com/prismicio/prismic-types/commit/cd9db5fa866cf5eea3e458710511ae109384d1b8))


### Chore

* update pull request template ([c8b2339](https://github.com/prismicio/prismic-types/commit/c8b23399cfac7d9d94ae5bb6030f6ba2305d237b))

### [0.1.2](https://github.com/prismicio/prismic-types/compare/v0.1.1...v0.1.2) (2021-07-07)


### Features

* add integration field ([91eaad5](https://github.com/prismicio/prismic-types/commit/91eaad5482472a54b00e46ce7755b79fcf4d7d16))


### Bug Fixes

* image node can feature a linkTo property ([fa3adba](https://github.com/prismicio/prismic-types/commit/fa3adbaecbea68f53efa77ea7865ebf749188af6))


### Chore

* add integration field to regular field type list ([0bb0e25](https://github.com/prismicio/prismic-types/commit/0bb0e255fcbbd29f50075fdcd3371b821e626220))

### [0.1.1](https://github.com/prismicio/prismic-types/compare/v0.1.0...v0.1.1) (2021-07-03)


### Bug Fixes

* add data property to FilledLinkToDocumentField ([cc62bf0](https://github.com/prismicio/prismic-types/commit/cc62bf0dfe3f086668b2d42c3fc72642d0e9e168)), closes [#1](https://github.com/prismicio/prismic-types/issues/1)
* looser SharedSliceModel variation generic ([b97f2c1](https://github.com/prismicio/prismic-types/commit/b97f2c1ffa8b04ae9b40c6a42a653556b4995d1c))

## [0.1.0](https://github.com/prismicio/prismic-types/compare/v0.0.12...v0.1.0) (2021-07-01)


### ⚠ BREAKING CHANGES

* rename CustomType prefix to CustomTypeModel

### Features

* add Shared Slice types ([c815c2d](https://github.com/prismicio/prismic-types/commit/c815c2d27386355725fc857ccd2625713d0dfcd3))
* rename CustomType prefix to CustomTypeModel ([7a493eb](https://github.com/prismicio/prismic-types/commit/7a493ebdf54bb917bf1844cfcba5aa79a992776c))

### [0.0.12](https://github.com/prismicio/prismic-types/compare/v0.0.11...v0.0.12) (2021-07-01)


### Features

* add custom type model types ([#2](https://github.com/prismicio/prismic-types/issues/2)) ([c664bf8](https://github.com/prismicio/prismic-types/commit/c664bf8fcf7daf00d1cd2cca5f0d31713ca693aa))
* export Custom Type enums ([e7a78e5](https://github.com/prismicio/prismic-types/commit/e7a78e572638b037c6be2d56f6ef02fff6d96500))


### Chore

* update dependencies ([b024ff6](https://github.com/prismicio/prismic-types/commit/b024ff63527fa18507b5ce57a2e45bb3ad31c09a))
* use npm over yarn ([ad27195](https://github.com/prismicio/prismic-types/commit/ad27195659494dfc7ba8acea2a1132087aa82ada))

### [0.0.11](https://github.com/prismicio/prismic-types/compare/v0.0.10...v0.0.11) (2021-06-25)


### Bug Fixes

* span node type ([6b261ab](https://github.com/prismicio/prismic-types/commit/6b261abef79c6de32751e7067228216a2a5267ca))

### [0.0.10](https://github.com/prismicio/prismic-types/compare/v0.0.9...v0.0.10) (2021-06-23)


### Features

* update richtext types ([c9a2f59](https://github.com/prismicio/prismic-types/commit/c9a2f598bb98aea458336aa4ff6391935c8642b9))


### Chore

* **deps:** maintain dependencies ([ddeac23](https://github.com/prismicio/prismic-types/commit/ddeac23be81f7c1817279bdd500306b6c735fac6))
* prefer npm as a package manager ([b028ec8](https://github.com/prismicio/prismic-types/commit/b028ec813fc353074ad09eb5aa89934eeec2d2e5))
* update prettier config ([f8449ef](https://github.com/prismicio/prismic-types/commit/f8449ef8c353fa36f203b950fb8b3e41efce6117))

### [0.0.9](https://github.com/prismicio/prismic-types/compare/v0.0.8...v0.0.9) (2021-06-15)


### Bug Fixes

* rich text span definition ([e43ac1f](https://github.com/prismicio/prismic-types/commit/e43ac1f0fb6f6c6f3022aecb958a2b9aca91457c))


### Chore

* **deps:** maintain dependencies ([3077caf](https://github.com/prismicio/prismic-types/commit/3077cafaabce591c3f9ec14e6b792c479c82cd10))

### [0.0.8](https://github.com/prismicio/prismic-types/compare/v0.0.7...v0.0.8) (2021-06-11)


### Features

* allow GroupField generic value ([006fbe0](https://github.com/prismicio/prismic-types/commit/006fbe05ebfd231e6fbcc30210d93711d6ae4bb4))


### Chore

* typo on config ([ada239a](https://github.com/prismicio/prismic-types/commit/ada239a26f0a12201b6eaeafbc733ccfa30dc466))


### Refactor

* use Record over object literal syntax ([b8fa931](https://github.com/prismicio/prismic-types/commit/b8fa9316e5991c56ac403d4de53f21707e937d47))

### [0.0.7](https://github.com/prismicio/prismic-types/compare/v0.0.6...v0.0.7) (2021-05-27)


### Chore

* maintain dependencies ([4e0d78c](https://github.com/prismicio/prismic-types/commit/4e0d78ca1525bcf87729d3206e7e2c43fd2ec4bd))
* update eslint config ([6d248fc](https://github.com/prismicio/prismic-types/commit/6d248fcc8ddcb29ec9ecf2f6ce38eb065b337d27))
* **config:** update eslint rules ([2a5804e](https://github.com/prismicio/prismic-types/commit/2a5804e8949020bda6b973331914eecf02d18453))

### [0.0.6](https://github.com/prismicio/prismic-types/compare/v0.0.5...v0.0.6) (2021-05-20)


### Bug Fixes

* use less strict typing for link type ([d9e02e3](https://github.com/prismicio/prismic-types/commit/d9e02e33ca924fc44028901b8ea566f062fddfed))


### Chore

* update template ([84190de](https://github.com/prismicio/prismic-types/commit/84190dea774bb33eacb18b293c757ff106fdb750))
* **config:** update .eslintignore ([17b9be4](https://github.com/prismicio/prismic-types/commit/17b9be4680ecfa5f7927c8c8e21b8bb0d97cd363))

### [0.0.5](https://github.com/prismicio/prismic-types/compare/v0.0.4...v0.0.5) (2021-05-18)


### Features

* use less strict type for link types ([6365216](https://github.com/prismicio/prismic-types/commit/636521654d5e0de06c35026c4c9f8f1edf86412c))


### Chore

* **config:** run lcov reporter for codecov collection ([6760c57](https://github.com/prismicio/prismic-types/commit/6760c57cda9d9682a27fcf2b887ddc91fea8facc))
* **config:** setup tests ([b0942e9](https://github.com/prismicio/prismic-types/commit/b0942e932c78f3ed528ed46b766e406df051015f))
* **config:** update coverage reporters ([3d456c3](https://github.com/prismicio/prismic-types/commit/3d456c30895d4bbb8e05dee78a7501929f3f33e2))

### [0.0.4](https://github.com/prismicio/prismic-types/compare/v0.0.3...v0.0.4) (2021-05-17)


### Bug Fixes

* **document:** alternate language typing ([bce6ceb](https://github.com/prismicio/prismic-types/commit/bce6ceb6f0a8f6ff3aaea288aa87c687e69f6d95))


### Chore

* **deps:** maintain dependencies ([c113013](https://github.com/prismicio/prismic-types/commit/c113013ba5519462e16d2f9a67ff8344771de7b3))


### Documentation

* update readme and issue template ([f9bb134](https://github.com/prismicio/prismic-types/commit/f9bb13422b39ce4126acdec2ccce0cf30b01023f))

### [0.0.3](https://github.com/prismicio/prismic-types/compare/v0.0.2...v0.0.3) (2021-05-11)


### ⚠ BREAKING CHANGES

* rename link exports for consistency

### Features

* add graphql support ([080b640](https://github.com/prismicio/prismic-types/commit/080b6405d707d7a9efe39c5980263c333cbb95eb))
* export embed types and empty link field type ([6039947](https://github.com/prismicio/prismic-types/commit/603994749643d0b2d7c0332a244d9333993731eb))


### Refactor

* rename link exports for consistency ([35338fd](https://github.com/prismicio/prismic-types/commit/35338fd93e78560937a8c0d6a481f0e95f69dfeb))

### [0.0.2](https://github.com/prismicio/prismic-types/compare/v0.0.1...v0.0.2) (2021-05-10)


### Features

* **document:** add prismic document header and document ([924f324](https://github.com/prismicio/prismic-types/commit/924f324716c09559efb5a32b790600243db92f61))
* **fields:** expose filled link fields ([86846e6](https://github.com/prismicio/prismic-types/commit/86846e696d1d7bbe53a35254596e838ec063589b))

### 0.0.1 (2021-05-10)


### Features

* add basic fields ([fc9e228](https://github.com/prismicio/prismic-types/commit/fc9e228700369094f5402941e755238bddc5da9a))
* add slice and slicezone fields ([9517078](https://github.com/prismicio/prismic-types/commit/95170787674e40812181e5775e6cfea9cccdef35))
* finish basic fields ([0ce6e98](https://github.com/prismicio/prismic-types/commit/0ce6e98110cf7337eff9fde7f513a80feb21085b))
* **fields:** add richtext type ([ece394c](https://github.com/prismicio/prismic-types/commit/ece394c66f91f0b6784970588c3904afc4a14ff5))


### Chore

* **deps:** maintain dependencies ([3b1c159](https://github.com/prismicio/prismic-types/commit/3b1c15982a549e7bbd8d233b3a13dea4f811382d))
* add .versionrc ([be4e048](https://github.com/prismicio/prismic-types/commit/be4e04853439b8f6a198c10997ae1c00aaa42d35))
* setup project ([62438b0](https://github.com/prismicio/prismic-types/commit/62438b0ff32778d297d901b611a96733fe2b7712))
