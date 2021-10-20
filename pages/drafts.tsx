import Layout from "../components/Layout"
import Link from "next/link"
import { Post, useDraftsQueryQuery } from "../generated/sdk"

const PostListItem = ({ post }: { post: Post }): JSX.Element => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author ? post.author.name : "Unknown Author"}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
)

const Drafts = () => {
  const { data, isLoading } = useDraftsQueryQuery()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <Layout>
      <>
        <div className="page">
          <h1>Drafts</h1>
          <main>
            {data?.drafts?.map(post => (
              <div key={post?.id} className="post">
                <PostListItem post={post} />
              </div>
            ))}
          </main>
        </div>
        <style jsx>{`
          .post {
            background: white;
            transition: box-shadow 0.1s ease-in;
          }

          .post:hover {
            box-shadow: 1px 1px 3px #aaa;
          }

          .post + .post {
            margin-top: 2rem;
          }
        `}</style>
      </>
    </Layout>
  )
}

export default Drafts
