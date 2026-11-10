# Mobile Test Data — IPEKA BSD Portal

## Test Accounts
Use only approved test accounts. Do not store real passwords in this repository.

| Role | Username | Password | Notes |
|---|---|---|---|
| Standard user | TBD | TBD | Use test account only |
| Admin user | Not available | Not available | Admin flows out of scope |

## Test Data
| Data | Value | Notes |
|---|---|---|
| Portal URL | https://app.ipekabsd.my.id/ | SUT |
| Search keyword | printer | Sample search |
| Visitor name | QA Mobile Test | Sample form data |
| Meeting room | Room A | Sample booking |
| Date | 2026-11-10 | Sample date |
| Time | 10:00 | Sample time |

## Mobile-Specific Test Data
- Long text input
- Special characters
- Empty input
- Invalid email
- Numeric-only input
- Portrait and landscape orientation

## Data Handling Rules
- Do not commit real credentials.
- Use placeholder values in shared files.
- Store secrets outside repository if needed.
- Mark environment blockers separately from product defects.
