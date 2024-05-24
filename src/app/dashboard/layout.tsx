import { Flex } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

import '@/styles/globals.css'
import { Sidebar } from '@/components/sidebar'
import { Topbar } from '@/components/topbar'
import { ClerkProviders } from '@/components/providers'
import { RequiresOrg } from '@/components/authenticated'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProviders>
			<RequiresOrg>
				<Flex minHeight={'100vh'}>
					<Sidebar />
					<Flex direction={'column'} flexGrow={'1'} p={'5'}>
						<Topbar />
						<div>{children}</div>
					</Flex>
				</Flex>
			</RequiresOrg>
		</ClerkProviders>
	)
}
