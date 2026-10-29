<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- AGENTS:BEGIN -->
> [!IMPORTANT]
> Visitor-submitted data (contact/lead forms) is inserted only from a
> `createServerFn` handler using the publishable-key server client, so it lands
> under the anon role and the table's insert-only RLS policy is the boundary —
> never from the browser directly and never through the admin client, which
> bypasses those policies. Validation rules live in one shared zod schema used by
> both the form and the handler.
<!-- AGENTS:END -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
