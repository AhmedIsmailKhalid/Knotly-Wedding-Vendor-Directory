import { VendorGridSkeleton } from '@/components/ui/Skeleton'

export default function VendorsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="h-8 w-48 bg-gray-100 rounded-lg animate-pulse mb-4" />
          <div className="h-10 w-full bg-gray-100 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-8 bg-gray-100 rounded-lg animate-pulse" />
              ))}
            </div>
          </aside>
          <main className="flex-1">
            <VendorGridSkeleton />
          </main>
        </div>
      </div>
    </div>
  )
}