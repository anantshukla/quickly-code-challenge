/*
	File: src/app/lib/ProfileDTO.tsx
	Description: This file contains the ProfileDTO interface.
*/

export interface ProfileDTO {
	full_name: string | null;
	id: number | null;
	first_name: string | null;
	last_name: string | null;
	email: string | null;
	cognito_id: string | null;
	company_id: number | null;
	phone: string | null;
	avatar_url: string | null;
	createdAt: string | null;
	updatedAt: string | null;
	deleted_at: string | null;
	Company: {
		charge_deployment_fee: boolean | null;
		tax_rate: number | null;
		available_credits: number | null;
		id: number | null;
		name: string | null;
		legal_name: string | null;
		business_registration: string | null;
		business_type: string | null;
		industry: string | null;
		expected_activity: string | null;
		early_pay_intent: number | null;
		website: string | null;
		business_number: number | null;
		primary_email: string | null;
		phone: string | null;
		address_line_1: string | null;
		address_line_2: string | null;
		address_city: string | null;
		address_state: string | null;
		address_zip: string | null;
		max_credit_amount: number | null;
		address_country: string | null;
		referral: string | null;
		shareholders_verified: boolean | null;
		approved: string | null;
		discount_percent: number | null;
		default_currency: string | null;
		default_payment_terms: number | null;
		default_erp_bank_account_invoices: string | null;
		default_erp_bank_account_bills: string | null;
		default_erp_credit_card_bills_erp_id: string | null;
		logo_url: string | null;
		vopay_client_id: string | null;
		default_erp_early_pay_account: string | null;
		default_erp_revenue_account: string | null;
		default_erp_bills_account: string | null;
		default_erp_early_pay_tax_rate: string | null;
		default_erp_revenue_tax_rate: string | null;
		default_erp_bills_tax_rate: string | null;
		default_discounts_account_erp_id: string | null;
		record_to_bill_account: string | null;
		auto_sync_invoices: boolean | null;
		auto_sync_bills: boolean | null;
		auto_journal_entries: boolean | null;
		auto_approve_bills: boolean | null;
		quickly_vendor_erp_id: string | null;
		quickly_customer_erp_id: string | null;
		vendor_pushcommunicationid: string | null;
		customer_pushcommunicationid: string | null;
		tax_number: string | null;
		railz_id: string | null;
		is_syncing: boolean | null;
		last_sync_at: string | null;
		last_deployment_charge: string | null;
		fee_type: string | null;
		variable_rate: string | null;
		flat_rate: string | null;
		advance_rate: number | null;
		vendor_deployment_fee: number | null;
		deployment_fee: number | null;
		vendor_advance_rate: number | null;
		vendor_fee_type: string | null;
		vendor_variable_rate: string | null;
		vendor_flat_rate: string | null;
		bill_clearing_account_erp_id: string | null;
		bill_clearing_account_pushcommunicationid: string | null;
		invoice_clearing_account_erp_id: string | null;
		invoice_clearing_account_pushcommunicationid: string | null;
		bill_purchasing_line_item_erp_id: string | null;
		bill_purchasing_line_item_pushcommunicationid: string | null;
		default_fees_account_erp_id: string | null;
		invoice_early_payment_expense_account_erp_id: string | null;
		createdAt: string | null;
		updatedAt: string | null;
		deleted_at: string | null;
		Connections: any[];
		Users: Array<{
			full_name: string | null;
			id: number | null;
			first_name: string | null;
			last_name: string | null;
			email: string | null;
			cognito_id: string | null;
			company_id: number | null;
			phone: string | null;
			avatar_url: string | null;
			createdAt: string | null;
			updatedAt: string | null;
			deleted_at: string | null;
			CompanyId: number | null;
		}>;
	};
	intercom_hash: string | null;
	roles: string | null;
	verified: boolean | null;
}