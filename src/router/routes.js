
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Login.vue')
      },
      {
        path: 'signup',
        component: () => import('pages/Signup.vue')
      },
      {
        path: 'forgotPassword',
        component: () => import('pages/ForgotPassword.vue')
      },
      {
        path: 'resetPassword',
        component: () => import('pages/ResetPassword.vue')
      },
      {
        path: 'verification',
        component: () => import('pages/Verification.vue')
      },
    ],
    
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'category', component: () => import('pages/Category.vue') },
      { path: 'subCategory', component: () => import('pages/SubCategory.vue') },
      { path: 'vehicleDetail', component: () => import('pages/VehicleDetail.vue') },
      { path: 'additionalDetail', component: () => import('pages/AdditionalDetail.vue') },
      { path: 'myBookings', component: () => import('pages/MyBookings.vue') },
      { path: 'map', component: () => import('pages/map.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
