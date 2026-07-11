const CANONICAL_ORIGIN = "https://gta6gameguide.xyz";
const CANONICAL_HOST = new URL(CANONICAL_ORIGIN).hostname;

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.protocol !== "https:" || url.hostname !== CANONICAL_HOST) {
      return Response.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
    }

    return env.ASSETS.fetch(request);
  }
};
