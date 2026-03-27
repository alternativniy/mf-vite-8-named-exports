export const routes = [
  {
    element: <div />,
    errorElement: <span />,
    hydrateFallbackElement: <></>,
    children: [
      {
        path: '*',
        element: <span />,
      },
    ],
  },
];

export const getRoutes = () => routes;