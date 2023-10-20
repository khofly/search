import Page from "@module/Wiki";

export default function Wiki({ params }: { params: { slug: Array<string> } }) {
  return <Page slug={params.slug} />;
}
