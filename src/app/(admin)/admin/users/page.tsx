import { prisma } from '@/lib/prisma'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils/formatDate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users — Admin — Knotly',
}

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      vendorProfile: { select: { businessName: true, isApproved: true } },
      _count: { select: { sentInquiries: true, reviews: true } },
    },
  })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Users</h1>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-5 py-3">
                User
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-5 py-3">
                Role
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-5 py-3">
                Details
              </th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wide px-5 py-3">
                Joined
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: typeof users[number]) => (
              <tr
                key={user.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
                </td>
                <td className="px-5 py-4">
                  <Badge
                    variant={
                      user.role === 'ADMIN'
                        ? 'rose'
                        : user.role === 'VENDOR'
                        ? 'amber'
                        : 'default'
                    }
                  >
                    {user.role.charAt(0) + user.role.slice(1).toLowerCase()}
                  </Badge>
                </td>
                <td className="px-5 py-4">
                  {user.role === 'VENDOR' && user.vendorProfile ? (
                    <p className="text-xs text-gray-500">
                      {user.vendorProfile.businessName} ·{' '}
                      <span className={user.vendorProfile.isApproved ? 'text-green-600' : 'text-amber-600'}>
                        {user.vendorProfile.isApproved ? 'Approved' : 'Pending'}
                      </span>
                    </p>
                  ) : user.role === 'COUPLE' ? (
                    <p className="text-xs text-gray-500">
                      {user._count.sentInquiries} inquiries · {user._count.reviews} reviews
                    </p>
                  ) : (
                    <p className="text-xs text-gray-400">—</p>
                  )}
                </td>
                <td className="px-5 py-4">
                  <p className="text-xs text-gray-500">{formatDate(user.createdAt)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}