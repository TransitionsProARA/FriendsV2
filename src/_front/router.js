import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"d9ebe3bf-edb6-43b0-845f-570e8f5f1999","homePageId":"53da37cd-2964-4e7d-9964-ef8d2a24de68","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"fr","default":true}],"background":{},"workflows":[],"pages":[{"id":"53da37cd-2964-4e7d-9964-ef8d2a24de68","linkId":"53da37cd-2964-4e7d-9964-ef8d2a24de68","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"40c2d4ea-4345-46de-9926-a06fde974cf9","sectionTitle":"home","linkId":"2f07cb88-844e-4891-9a26-437f45fc0d56"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"07813a59-289b-4e22-a8af-cd354295cf09","linkId":"07813a59-289b-4e22-a8af-cd354295cf09","name":"Suivi d'activité detail","folder":null,"paths":{"fr":"page-suivi-detail/{{id_suivi|}}","default":"page-suivi-detail/{{id_suivi|}}"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"6c2c286b-7a07-46d0-a3ef-450c2da042b2","sectionTitle":"suivi_dactivite_header","linkId":"2335db90-3304-4704-9f78-93de58bb8595"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"48e58bb5-9bae-4fec-a7d0-c8a50d5d284e","linkId":"48e58bb5-9bae-4fec-a7d0-c8a50d5d284e","name":"Liste des utilisateurs","folder":null,"paths":{"fr":"liste-des-utilisateurs","default":"liste-des-utilisateurs"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"8d0f30a7-833d-417a-b608-c33a57353ce0","sectionTitle":"Section","linkId":"8390eea9-b339-4260-a462-b096783425a1"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fc3bc9d0-8605-4427-9117-4439c48bf47c","linkId":"fc3bc9d0-8605-4427-9117-4439c48bf47c","name":"login","folder":null,"paths":{"fr":"login","default":"login"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"a0631f02-f499-438d-a097-944647e9c4ec","sectionTitle":"Login","linkId":"94ff134d-136a-48e9-8ca5-dec645274eeb"}],"pageUserGroups":[],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"93dee563-05e1-4799-879a-801b2a858005","linkId":"93dee563-05e1-4799-879a-801b2a858005","name":"login-password","folder":null,"paths":{"en":"login-password","default":"login-password"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"95286fc8-7df1-429f-9669-73bb2cd53455","sectionTitle":"Login","linkId":"411a9cc4-787c-4206-960e-5b34064b00a9"}],"pageUserGroups":[],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ea1aa991-bd3f-44df-819f-d4f778e80efb","linkId":"ea1aa991-bd3f-44df-819f-d4f778e80efb","name":"Plans d'actions","folder":null,"paths":{"fr":"page-plan_daction","default":"page-plan_daction"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"fc191837-e577-44c7-a4c6-891f8e82c505","sectionTitle":"page_plans_dactions_header","linkId":"32c24c53-7b1d-48b9-8203-d370150da239"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5e5cfe57-70c3-4c90-8acc-0e1627900d6f","linkId":"5e5cfe57-70c3-4c90-8acc-0e1627900d6f","name":"Tableau des utilisateurs","folder":null,"paths":{"fr":"page-partenaire-copy","default":"page-partenaire-copy"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"da82bcee-e5ff-45ba-9ba0-5d0f0700b568","sectionTitle":"page_user_header","linkId":"24a1d96b-055c-48d6-b50e-737bda431a43"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9e9d12b0-31d9-4d92-be44-555e2dadf3b7","linkId":"9e9d12b0-31d9-4d92-be44-555e2dadf3b7","name":"Partenaires","folder":null,"paths":{"fr":"page-partenaire","default":"page-partenaire"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"7108a372-7e68-4d68-8269-c47142238216","sectionTitle":"page_partenaires_header","linkId":"bda3b7cd-7c8f-40fa-8e59-4ab7b3bcf820"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"06782399-6cbd-461e-964a-a9cfa92ea567","linkId":"06782399-6cbd-461e-964a-a9cfa92ea567","name":"RDV","folder":null,"paths":{"fr":"page-rdv","default":"page-rdv"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"2f2c2d6a-9d93-457c-8d7a-4da9962042cc","sectionTitle":"page_rdv_header","linkId":"71fd95f7-13fc-4e6b-8ece-ad5f2cc8e1b5"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f6839e4a-e14a-4135-8283-f87eca6c1d93","linkId":"f6839e4a-e14a-4135-8283-f87eca6c1d93","name":"Suivi d'activité","folder":null,"paths":{"fr":"page-suivi_dactivite","default":"page-suivi_dactivite"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"32dc0130-2c8b-41d1-b0ed-214a81d0c9e1","sectionTitle":"Sidemenu","linkId":"4f3ba503-8570-4e8f-bf3b-72cbbc1bddb7"},{"uid":"aea6e6a2-5909-45ff-bbfb-208a92db117e","sectionTitle":"suivi_dactivite_header","linkId":"94cbf25b-13d2-4768-999d-62a24c1fab87"}],"pageUserGroups":[{}],"title":{"fr":"Friends"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bf853717-f643-4a93-a4c4-bb6abe628456","linkId":"bf853717-f643-4a93-a4c4-bb6abe628456","name":"test","folder":null,"paths":{"fr":"test","default":"test"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"9897910a-5801-457b-a568-0b468959eba0","sectionTitle":"Section","linkId":"a2445183-06da-43f0-b76a-1a53ec16ce4f"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 112;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
