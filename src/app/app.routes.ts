import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'
import { AuthRoutes, getAuthRoutes } from '@pages/auth/auth.routes'
import { HomeRoutes, getHomeRoutes } from '@pages/home/home.routes'
import { NotFoundPageRoutes, getNotFoundPageRoutes } from '@pages/not-found/not-found.routes'
import { ProfileRoutes, getProfileRoutes } from '@pages/profile/profile.routes'

type GroupedRoutes = [
    HomeRoutes,
    AuthRoutes,
    ProfileRoutes,
    // catch-all route must be last
    NotFoundPageRoutes,
]

const groupedRoutes: GroupedRoutes = [
    getHomeRoutes(),
    getAuthRoutes(),
    getProfileRoutes(),
    getNotFoundPageRoutes(),
]

const flattenedRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('@pages/dashboard-home/dashboard-home.component').then(
                (m) => m.DashboardHomeComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage',
        loadComponent: () =>
            import('@pages/baggage/baggage.component').then((m) => m.BaggageComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'book-flight',
        loadComponent: () =>
            import('@pages/book-flight/book-flight.component').then((m) => m.BookFlightComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'current-offers',
        loadComponent: () =>
            import('@pages/current-offers/current-offers.component').then(
                (m) => m.CurrentOffersComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
]
groupedRoutes.forEach((routeGroup) => {
    Object.values(routeGroup).forEach((route) => flattenedRoutes.push(route))
})

export const AppRoutes = flattenedRoutes
