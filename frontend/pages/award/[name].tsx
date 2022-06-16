import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

function Post() {
  const router = useRouter()
  const { name } = router.query

  return (
    <Layout>
      <div className="m-4 rounded-xl bg-white shadow-md">

        <div className="border-b-4 border-green p-3">
          <h2 className="text-md font-semibold text-neutral-800">
            {name}
          </h2>
        </div>

        <div className="p-4">
          <p className="mb-4">
            Beskrivning här.
          </p>

          <button className="bg-green w-full  text-xs text-white py-2 px-4 rounded">
            Beställ
          </button>
        </div>

      </div>
    </Layout>
  );
}

export default Post
