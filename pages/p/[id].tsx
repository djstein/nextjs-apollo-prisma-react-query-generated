import Layout from "../../components/Layout"
import Router, { useRouter } from "next/router"
import {
  usePostQueryQuery,
  usePublishMutationMutation,
  useDeleteMutationMutation,
} from "../../generated/sdk"

function Post() {
  const postId = String(useRouter().query.id)
  const { data, isFetching } = usePostQueryQuery({ postId })

  const { mutate: publish } = usePublishMutationMutation()
  const { mutate: deletePost } = useDeleteMutationMutation()

  if (isFetching) {
    return <div>Loading ...</div>
  }

  let title = data?.post?.title
  if (!data?.post?.published) {
    title = `${title} (Draft)`
  }

  const authorName = data?.post?.author?.name || "Unknown author"

  return (
    <Layout>
      <>
        <div>
          <h2>{title}</h2>
          <p>By {authorName}</p>
          <p>{data?.post?.content}</p>
          {!data?.post?.published && (
            <button
              onClick={async e => {
                await publish({
                  postId,
                })
                Router.push("/")
              }}
            >
              Publish
            </button>
          )}
          <button
            onClick={async e => {
              await deletePost({
                postId,
              })
              Router.push("/")
            }}
          >
            Delete
          </button>
        </div>
        <style jsx>{`
          .page {
            background: white;
            padding: 2rem;
          }

          .actions {
            margin-top: 2rem;
          }

          button {
            background: #ececec;
            border: 0;
            border-radius: 0.125rem;
            padding: 1rem 2rem;
          }

          button + button {
            margin-left: 1rem;
          }
        `}</style>
      </>
    </Layout>
  )
}

export default Post
