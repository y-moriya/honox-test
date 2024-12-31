import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, title }) => {
	return <Layout title={title}>{children}</Layout>;
});
