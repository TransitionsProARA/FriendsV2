import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa from '@/components/plugins/plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186 from '@/components/plugins/plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa', plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186', plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"6ce8b529-9767-4e36-874e-2ca4800af706":"#FFFFFF","45c485be-be7a-4265-b130-3189d52b034f":"#E5E7EB","9e71380f-9eb9-443a-adf9-c9dcba82a9ad":"#E05D5D","c9c489d1-71f6-410b-a4cc-f078dc7610f2":"#0D9488","87cb72a2-2e88-4e23-8231-e4d96d732966":"#334155","d959c9e5-298a-43bc-8878-e317d1c0d49f":"#EF4444","2a1580fc-adce-43ed-b77b-51128ca9c0cc":"#FEE2E2","bea53b65-d748-4cb9-ad05-772270e22de2":"#575756","2055436a-278b-4277-a4ed-326ea9c4f3d6":"#009688","46f697ec-7dee-49c8-ab78-61966db59ea6":"#111827","a4ddb521-c761-4290-bc45-a61a2ebcc4a3":"#4432aa","d1af048b-8a3c-47cc-99fb-8436760fc6e0":"#ff5c61","2e5dac5a-ba51-4617-92b4-58b2f9dcfb3b":"#ffeb00","8d5999a8-575c-415e-9eb9-e93a128e1c3e":"#1d1d1b","83885c1c-ce5f-46ec-b4c8-977f4c9ddd2b":"#d3caca","3329889e-b779-4a01-a5ab-a728811fecb0":"#DBEAFE","13593993-483d-4824-a148-199476a14de1":"#1D4ED8","46ee5882-15a1-46c0-a95d-348c49c9e51c":"#FEF3C7","03e4dfc8-50ea-47f6-ba23-e6b2359675c5":"#B45309","3620ba16-6db1-4fb6-a73c-a992794b0f9d":"#FCE7F3","61890a1d-56ac-4989-a37c-6ef7a6960514":"#BE185D","dfae9d5f-0bb8-4fd8-bf50-a7baa1f07295":"#F3E8FF","8f9fc399-85d3-462d-b671-5b39bd7d11dc":"#7E22C2","e6414515-6017-4e49-9f6e-7840ca07bc83":"#FFFFFF","54bab7b0-2e36-4cb0-ab96-4d281bdd267e":"#E2E8F0","c1dce4b9-fe98-4802-a14f-5652bb80218b":"#1D4ED8","ca81d9da-17dc-47f9-a8ad-7718002e48d4":"#0D9488","8a34bad1-39bd-48a2-875b-81241b0d668d":"#EFF6FF","64e904d4-2b21-4829-9a69-40b365503d2a":"#DBEAFE","0e5fa72d-3d8f-4ee9-9f4c-51b39a0ee426":"#BFDBFE","9c7f4646-a0e4-4cbd-804d-36e67a0d6bec":"#93C5FD","71ab2f8a-6147-406b-b927-0cc73055d20e":"#60A5FA","0b002463-9ed1-4835-8f3d-3ff78e3c3980":"#3B82F6","f1df801d-b3be-442c-9ec3-c3a98cad67fb":"#2563EB","f40de375-7f88-4c94-90d8-988d4793c8ca":"#1D4ED8","a7f993ab-ccca-4aa7-8313-d40bdf8c89f0":"#1E40AF","a48acb49-a6ef-480b-8e0f-e4a68a37d01c":"#1E3A8A","14872171-06a3-49b3-be34-32f2e2c5b895":"#F1F5F9","aa8df9da-0b1d-4945-9b75-ff76f3e37cad":"#CBD5E1","85f9ded4-25cf-44db-8de4-8a556527d96b":"#64748B","75bd73ef-5f2f-4528-9c4c-f67407f1fc8a":"#334155","d48cd81c-2645-42d7-b8d1-cd1adf79362f":"#020617","9f28960a-274d-4807-b74e-17cf7083362e":"#FEE2E2","9b29e97b-3184-4fbe-96b8-67dffc497569":"#FECACA","58eebd59-0261-4de5-ac48-008369e07baa":"#F87171","f16ac76e-de07-4fea-b0c3-f6c88cccc79e":"#EF4444","8ab52359-e796-4c17-9005-bb6f9e441a3f":"#B91C1C","ca947bb4-cf5f-45b4-b93c-9913627e7c13":"#450A0A","c7f778da-034c-4e4a-84ec-bcf62d7ccc76":"#FFFBEB","d45a9b09-59e0-490e-ae44-304f9af1d5c9":"#FDE68A","cf01a339-a81a-4b27-99db-6f1d848f382b":"#FBBF24","40b50816-1deb-4534-995c-872aa7f91597":"#F59E0B","35e91973-fc67-4c7a-8427-e3507e0c3f89":"#D97706","9524262f-d319-448d-889f-4b59b344be87":"#B45309","f9ef7d9a-0a98-4604-bdb9-283451f642ef":"#451A03","ff80d164-7255-4508-9d70-a8a5f75d5da8":"#BBF7D0","5430d038-5a35-49ef-b770-669e771aab09":"#4ADE80","eddea918-5d19-4b24-b153-2c5ecaed1891":"#16A34A","90fb00fb-2d8b-4501-ab21-e42230a1e807":"#166534","51933a32-9a3a-4151-a6d4-3d4dcbea24a3":"#052E16","76b8a655-f5d1-402e-a408-fec2a825a09a":"rgba(0, 0, 0, 0.2)","62111eba-c38a-4b29-98dd-524549be1987":"rgba(0, 0, 0, 0.4)","9a8c7f23-4815-40a5-b8cc-c5fbbfd56e4a":"rgba(0, 0, 0, 0.5)","9f16f6e2-988b-4112-a588-70c84390abb2":"rgba(0, 0, 0, 0.6)","26abbde7-5fe1-433a-9f1e-9c190827f1f7":"rgba(0, 0, 0, 0.7)","30fcaf9d-5b8c-476a-a79d-793ea6373d9c":"rgba(0, 0, 0, 0.95)","f6fd9b54-10c7-4351-b6f3-695953d9879e":"#172554","4c394f6f-c47b-4c1a-acd6-293f6deb40d6":"#F8FAFC","29b45591-b012-402e-8d22-807ff291f10f":"#E2E8F0","53859c8c-9f0e-4390-bc4d-f539bba49951":"#94A3B8","7258c6d4-67ba-46a9-967f-cdee7f6b4194":"#475569","b52e7045-77d4-4fad-ac67-d7d06a0aaf87":"#1E293B","be4614b2-d7fe-4855-821a-f80e207a4e4e":"#0F172A","1f57f1c4-8b32-4f9a-9a47-023911e19da2":"#FEF2F2","b706fd4f-30f2-4621-a972-35ff8a722f13":"#FCA5A5","39b336ac-3c37-4662-9050-1079d14c4863":"#DC2626","0ec3caaa-2288-4908-8d55-312c6da2de63":"#991B1B","15497acc-afa3-4a54-82e1-7d75ae8af095":"#7F1D1D","a778af0b-a0bd-4087-ab4e-557d6e1142de":"#FEF3C7","8e9e82ee-8a49-4438-8388-9a98ef65f617":"#FCD34D","18ab2f66-017b-4f40-8530-d2e06a078319":"#92400E","45d189d1-a0dd-46c0-a8cf-4c409abc823e":"#78350F","cd838686-0ff1-4477-a075-488e6beef4c9":"#F0FDF4","533286d0-3aa8-4f4e-bdc3-792a4606e18c":"#DCFCE7","9f7a8ae1-1caf-4366-8849-d2412fbc9535":"#86EFAC","49d36048-cc33-4368-b514-08de115f6cc4":"#22C55E","05b18231-38ba-4b16-b90e-2810f115aa2e":"#15803D","b17f3a2c-635c-4945-a97b-044d7a97c654":"#14532D","a3faa3b2-03b4-48c3-aa83-f0d729a51888":"rgba(0, 0, 0, 0.05)","39d736ce-73bc-42a2-a218-87e658668d1d":"rgba(0, 0, 0, 0.1)","9fe76895-3867-4de1-8cd1-fd72f9536eae":"rgba(0, 0, 0, 0.3)","75ab905f-3af1-4e3f-88d5-2e4a19fac430":"rgba(0, 0, 0, 0.8)","74456d6d-6528-4fb8-83a4-90f49e1a2f2d":"rgba(0, 0, 0, 0.9)","81a51eb7-245d-4336-839b-6289460af10e":"#DCFCE7","d0b09557-d155-4ad4-9489-08a4ea3a8db1":"#15803D","3084c7d2-26b1-44a1-9c68-caf287188172":"#14B8A6"} : {"6ce8b529-9767-4e36-874e-2ca4800af706":"#FFFFFF","45c485be-be7a-4265-b130-3189d52b034f":"#E5E7EB","9e71380f-9eb9-443a-adf9-c9dcba82a9ad":"#E05D5D","c9c489d1-71f6-410b-a4cc-f078dc7610f2":"#0D9488","87cb72a2-2e88-4e23-8231-e4d96d732966":"#334155","d959c9e5-298a-43bc-8878-e317d1c0d49f":"#EF4444","2a1580fc-adce-43ed-b77b-51128ca9c0cc":"#FEE2E2","bea53b65-d748-4cb9-ad05-772270e22de2":"#575756","2055436a-278b-4277-a4ed-326ea9c4f3d6":"#00a8a8","46f697ec-7dee-49c8-ab78-61966db59ea6":"#111827","a4ddb521-c761-4290-bc45-a61a2ebcc4a3":"#4432aa","d1af048b-8a3c-47cc-99fb-8436760fc6e0":"#ff5c61","2e5dac5a-ba51-4617-92b4-58b2f9dcfb3b":"#ffeb00","8d5999a8-575c-415e-9eb9-e93a128e1c3e":"#1d1d1b","83885c1c-ce5f-46ec-b4c8-977f4c9ddd2b":"#d3caca","3329889e-b779-4a01-a5ab-a728811fecb0":"#DBEAFE","13593993-483d-4824-a148-199476a14de1":"#1D4ED8","46ee5882-15a1-46c0-a95d-348c49c9e51c":"#FEF3C7","03e4dfc8-50ea-47f6-ba23-e6b2359675c5":"#B45309","3620ba16-6db1-4fb6-a73c-a992794b0f9d":"#FCE7F3","61890a1d-56ac-4989-a37c-6ef7a6960514":"#BE185D","dfae9d5f-0bb8-4fd8-bf50-a7baa1f07295":"#F3E8FF","8f9fc399-85d3-462d-b671-5b39bd7d11dc":"#7E22C2","e6414515-6017-4e49-9f6e-7840ca07bc83":"#FFFFFF","54bab7b0-2e36-4cb0-ab96-4d281bdd267e":"#E2E8F0","c1dce4b9-fe98-4802-a14f-5652bb80218b":"#1D4ED8","ca81d9da-17dc-47f9-a8ad-7718002e48d4":"#0D9488","8a34bad1-39bd-48a2-875b-81241b0d668d":"#EFF6FF","64e904d4-2b21-4829-9a69-40b365503d2a":"#DBEAFE","0e5fa72d-3d8f-4ee9-9f4c-51b39a0ee426":"#BFDBFE","9c7f4646-a0e4-4cbd-804d-36e67a0d6bec":"#93C5FD","71ab2f8a-6147-406b-b927-0cc73055d20e":"#60A5FA","0b002463-9ed1-4835-8f3d-3ff78e3c3980":"#3B82F6","f1df801d-b3be-442c-9ec3-c3a98cad67fb":"#2563EB","f40de375-7f88-4c94-90d8-988d4793c8ca":"#1D4ED8","a7f993ab-ccca-4aa7-8313-d40bdf8c89f0":"#1E40AF","a48acb49-a6ef-480b-8e0f-e4a68a37d01c":"#1E3A8A","14872171-06a3-49b3-be34-32f2e2c5b895":"#F1F5F9","aa8df9da-0b1d-4945-9b75-ff76f3e37cad":"#CBD5E1","85f9ded4-25cf-44db-8de4-8a556527d96b":"#64748B","75bd73ef-5f2f-4528-9c4c-f67407f1fc8a":"#334155","d48cd81c-2645-42d7-b8d1-cd1adf79362f":"#020617","9f28960a-274d-4807-b74e-17cf7083362e":"#FEE2E2","9b29e97b-3184-4fbe-96b8-67dffc497569":"#FECACA","58eebd59-0261-4de5-ac48-008369e07baa":"#F87171","f16ac76e-de07-4fea-b0c3-f6c88cccc79e":"#EF4444","8ab52359-e796-4c17-9005-bb6f9e441a3f":"#B91C1C","ca947bb4-cf5f-45b4-b93c-9913627e7c13":"#450A0A","c7f778da-034c-4e4a-84ec-bcf62d7ccc76":"#FFFBEB","d45a9b09-59e0-490e-ae44-304f9af1d5c9":"#FDE68A","cf01a339-a81a-4b27-99db-6f1d848f382b":"#FBBF24","40b50816-1deb-4534-995c-872aa7f91597":"#F59E0B","35e91973-fc67-4c7a-8427-e3507e0c3f89":"#D97706","9524262f-d319-448d-889f-4b59b344be87":"#B45309","f9ef7d9a-0a98-4604-bdb9-283451f642ef":"#451A03","ff80d164-7255-4508-9d70-a8a5f75d5da8":"#BBF7D0","5430d038-5a35-49ef-b770-669e771aab09":"#4ADE80","eddea918-5d19-4b24-b153-2c5ecaed1891":"#16A34A","90fb00fb-2d8b-4501-ab21-e42230a1e807":"#166534","51933a32-9a3a-4151-a6d4-3d4dcbea24a3":"#052E16","76b8a655-f5d1-402e-a408-fec2a825a09a":"rgba(0, 0, 0, 0.2)","62111eba-c38a-4b29-98dd-524549be1987":"rgba(0, 0, 0, 0.4)","9a8c7f23-4815-40a5-b8cc-c5fbbfd56e4a":"rgba(0, 0, 0, 0.5)","9f16f6e2-988b-4112-a588-70c84390abb2":"rgba(0, 0, 0, 0.6)","26abbde7-5fe1-433a-9f1e-9c190827f1f7":"rgba(0, 0, 0, 0.7)","30fcaf9d-5b8c-476a-a79d-793ea6373d9c":"rgba(0, 0, 0, 0.95)","f6fd9b54-10c7-4351-b6f3-695953d9879e":"#172554","4c394f6f-c47b-4c1a-acd6-293f6deb40d6":"#F8FAFC","29b45591-b012-402e-8d22-807ff291f10f":"#E2E8F0","53859c8c-9f0e-4390-bc4d-f539bba49951":"#94A3B8","7258c6d4-67ba-46a9-967f-cdee7f6b4194":"#475569","b52e7045-77d4-4fad-ac67-d7d06a0aaf87":"#1E293B","be4614b2-d7fe-4855-821a-f80e207a4e4e":"#0F172A","1f57f1c4-8b32-4f9a-9a47-023911e19da2":"#FEF2F2","b706fd4f-30f2-4621-a972-35ff8a722f13":"#FCA5A5","39b336ac-3c37-4662-9050-1079d14c4863":"#DC2626","0ec3caaa-2288-4908-8d55-312c6da2de63":"#991B1B","15497acc-afa3-4a54-82e1-7d75ae8af095":"#7F1D1D","a778af0b-a0bd-4087-ab4e-557d6e1142de":"#FEF3C7","8e9e82ee-8a49-4438-8388-9a98ef65f617":"#FCD34D","18ab2f66-017b-4f40-8530-d2e06a078319":"#92400E","45d189d1-a0dd-46c0-a8cf-4c409abc823e":"#78350F","cd838686-0ff1-4477-a075-488e6beef4c9":"#F0FDF4","533286d0-3aa8-4f4e-bdc3-792a4606e18c":"#DCFCE7","9f7a8ae1-1caf-4366-8849-d2412fbc9535":"#86EFAC","49d36048-cc33-4368-b514-08de115f6cc4":"#22C55E","05b18231-38ba-4b16-b90e-2810f115aa2e":"#15803D","b17f3a2c-635c-4945-a97b-044d7a97c654":"#14532D","a3faa3b2-03b4-48c3-aa83-f0d729a51888":"rgba(0, 0, 0, 0.05)","39d736ce-73bc-42a2-a218-87e658668d1d":"rgba(0, 0, 0, 0.1)","9fe76895-3867-4de1-8cd1-fd72f9536eae":"rgba(0, 0, 0, 0.3)","75ab905f-3af1-4e3f-88d5-2e4a19fac430":"rgba(0, 0, 0, 0.8)","74456d6d-6528-4fb8-83a4-90f49e1a2f2d":"rgba(0, 0, 0, 0.9)","81a51eb7-245d-4336-839b-6289460af10e":"#DCFCE7","d0b09557-d155-4ad4-9489-08a4ea3a8db1":"#15803D","3084c7d2-26b1-44a1-9c68-caf287188172":"#14B8A6"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"db6c09a5-8142-40d1-8bda-5a018946573c":"8px","76fc13f9-5a73-44b3-9d94-13a09f36d940":"24px","4af0c838-7249-4c78-bcf4-339dda92a8ea":"4px","9d2817e6-ca5f-4d34-aa54-d96b463dad29":"16px","5910ecd4-0648-4572-afee-933ea6c3a1af":"32px","87e072d4-bdd7-4256-ae6a-fb73f57d1ece":"48px","7e1292e5-55bc-4c9c-a3d3-06cff3019b66":"14px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"df8c4bf9-1b60-45f7-9185-976c72784e5a":"700 16px/24px var(--ww-default-font-family, sans-serif)","c8472412-c0a3-4dde-879c-8b09ca869ac4":"700 18px/27px var(--ww-default-font-family, sans-serif)","8f3c9274-cb41-4570-ac73-18f5144ff77a":"700 14px/21px var(--ww-default-font-family, sans-serif)","d3534f91-80c1-4ff2-993c-2c47d896e008":"500 12px/18px var(--ww-default-font-family, sans-serif)","ea058f6b-1823-4eba-926b-a292ff28c926":"600 18px/1.2 'Playfair Display', serif","af3d326f-5421-4352-825d-46e275e86d0e":"400 18px/1.5 'Barlow', sans-serif","f2ec81da-d936-4594-8129-956141d71e6e":"700 14px/24px var(--ww-default-font-family, sans-serif)","1cc18669-757e-4d6f-b9dc-4c26c004d8f7":"700 24px/1.2 'Playfair Display', serif","faaaa1d9-491a-4320-a16c-0b814bfc7531":"400 14px/1.5 'Barlow', sans-serif","2ab1a9ba-dc5e-4ff1-b18a-e780e1186d57":"400 18px/27px var(--ww-default-font-family, sans-serif)","9da0c7d3-d288-47c6-92eb-2b257c21e35c":"600 30px/normal 'Playfair Display', serif","1ae43c0f-d0c7-4d19-977d-048f6754e883":"400 12px/normal 'Barlow', sans-serif","d53e89be-43f2-4456-bb42-50dd13dbc918":"500 16px/24px 'Inter', sans-serif","4b448574-e721-44d3-b6dd-8761766bd384":"700 16px/24px var(--ww-default-font-family, sans-serif)","27fcb06a-3bf4-4235-b581-f0b16cf4ef10":"700 20px/30px var(--ww-default-font-family, sans-serif)","9826d460-66b2-4912-a6d5-2b6ac12629fb":"700 24px/32px var(--ww-default-font-family, sans-serif)","33d3bbe6-a9b8-4032-9a1d-69f4d34b0de7":"400 16px/24px var(--ww-default-font-family, sans-serif)","26e02088-3f7e-4fd0-9a51-ab1b2ec84f4f":"400 14px/21px var(--ww-default-font-family, sans-serif)","74286e36-44e6-489a-8964-4a34acbf6475":"500 16px/24px var(--ww-default-font-family, sans-serif)","a177472a-7a1a-47c9-9ab0-caa2e48f13b8":"500 14px/21px var(--ww-default-font-family, sans-serif)","46950be8-7993-4a60-b6b7-e309b89108b2":"500 14px/21px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
