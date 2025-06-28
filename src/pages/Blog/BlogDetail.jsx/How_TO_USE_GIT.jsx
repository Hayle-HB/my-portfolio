import { Highlight, themes } from "prism-react-renderer";
import PropTypes from "prop-types";
import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 px-2 py-1 rounded text-sm bg-blue-500 hover:bg-blue-600 text-white transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <Highlight theme={themes.nightOwl} code={code.trim()} language="bash">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-4 rounded-lg overflow-x-auto`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell text-right pr-4 text-gray-500 select-none w-8">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

const How_TO_USE_GIT = () => {
  return (
    <div className="min-h-screen bg-[#13151a] text-white pt-32 pb-20">
      <article className="prose prose-invert mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">
          How to Use Git for Team Work: A Comprehensive Guide
        </h1>

        <div className="text-gray-300 mb-8">
          <p className="text-sm">Published on March 14, 2024</p>
          <div className="flex gap-2 mt-2">
            {["Git", "DevOps", "Backend", "Trends"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-blue-900/40 text-blue-200 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              Working with Git in a team environment requires more than just
              knowing basic git commands. This comprehensive guide will walk you
              through the entire workflow, from setting up your repository to
              maintaining a clean and efficient collaboration process.
              We&apos;ll cover best practices, common pitfalls to avoid, and how
              to handle various scenarios you&apos;ll encounter in team
              development.
            </p>
          </section>

          {/* Initial Setup */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. Initial Repository Setup
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              1.1 Cloning the Repository
            </h3>
            <p>Start by cloning the repository to your local machine:</p>
            <CodeBlock
              code={`
# Clone the repository
git clone https://github.com/username/repository.git

# Navigate to the project directory
cd repository

# View remote repository information
git remote -v

# Check current branch and status
git status
            `}
            />

            <h3 className="text-xl font-semibold mb-3 mt-6">
              1.2 Configuring Your Git Identity
            </h3>
            <p>Set up your Git identity for this repository:</p>
            <CodeBlock
              code={`
# Set your name for this repository
git config user.name "Your Name"

# Set your email for this repository
git config user.email "your.email@company.com"

# Verify your settings
git config --list

# Set default branch name to main (if needed)
git config --global init.defaultBranch main
            `}
            />
          </section>

          {/* Branch Management */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Branch Management</h2>

            <h3 className="text-xl font-semibold mb-3">
              2.1 Creating Feature Branches
            </h3>
            <p>Always create a new branch for each feature or bug fix:</p>
            <CodeBlock
              code={`
# Ensure you're on the latest main branch
git checkout main

# Pull latest changes
git pull origin main

# List all branches
git branch -a

# Create and switch to a new feature branch
git checkout -b feature/your-feature-name

# Verify you're on the new branch
git branch

# Push the new branch to remote (first time)
git push -u origin feature/your-feature-name
            `}
            />

            <h3 className="text-xl font-semibold mb-3 mt-6">
              2.2 Branch Naming Conventions
            </h3>
            <p>Follow these naming conventions for branches:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>feature/feature-name - for new features</li>
              <li>bugfix/bug-name - for bug fixes</li>
              <li>hotfix/issue-name - for urgent production fixes</li>
              <li>release/version-number - for release branches</li>
            </ul>
          </section>

          {/* Daily Workflow */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Daily Development Workflow
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              3.1 Keeping Your Branch Updated
            </h3>
            <p>
              Regularly sync your branch with the main branch to avoid
              conflicts:
            </p>
            <pre className="bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto">
              <code>
                # Save your current changes git stash save &quot;work in
                progress on feature X&quot; # Check stash list git stash list #
                Update main branch git checkout main git fetch origin git pull
                origin main # Return to your feature branch git checkout
                feature/your-feature-name # Merge main into your feature branch
                git merge main # Resolve any conflicts if they occur # Then
                reapply your changes git stash pop # Verify the status git
                status
              </code>
            </pre>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              3.2 Committing Changes
            </h3>
            <p>Make atomic commits with clear messages:</p>
            <pre className="bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto">
              <code>
                # Check status of changes git status # View detailed changes git
                diff # Stage specific files git add file1.js file2.js # Stage
                all changes git add . # Review staged changes git diff --staged
                # Commit with a descriptive message git commit -m &quot;feat:
                add user authentication feature&quot; # For a more detailed
                commit message git commit -v # Amend last commit (if needed) git
                commit --amend # Push changes to your branch git push origin
                feature/your-feature-name
              </code>
            </pre>
          </section>

          {/* Handling Conflicts */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Handling Merge Conflicts
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              4.1 Preventing Conflicts
            </h3>
            <p>To minimize conflicts:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Regularly pull from main</li>
              <li>Communicate with team members about file changes</li>
              <li>Keep feature branches short-lived</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">
              4.2 Resolving Conflicts
            </h3>
            <p>When conflicts occur:</p>
            <pre className="bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto">
              <code>
                # Check status to see conflicting files git status # View the
                conflict markers in files git diff # After resolving conflicts
                in your editor git add . # Verify all conflicts are resolved git
                status # Create a merge commit git commit -m &quot;fix: resolve
                merge conflicts with main&quot; # Push the merged changes git
                push origin feature/your-feature-name # If you need to abort the
                merge git merge --abort
              </code>
            </pre>
          </section>

          {/* Pull Requests */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Creating and Managing Pull Requests
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              5.1 Preparing Your Branch
            </h3>
            <p>Before creating a PR:</p>
            <pre className="bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto">
              <code>
                # Ensure your branch is up to date git checkout main git pull
                origin main git checkout feature/your-feature-name git merge
                main # Push your changes git push origin
                feature/your-feature-name
              </code>
            </pre>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              5.2 PR Best Practices
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Write clear PR descriptions</li>
              <li>Include screenshots for UI changes</li>
              <li>Link related issues</li>
              <li>Request reviews from relevant team members</li>
              <li>Address review comments promptly</li>
            </ul>
          </section>

          {/* Advanced Topics */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Advanced Git Operations
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              6.1 Interactive Rebase and Squashing
            </h3>
            <CodeBlock
              code={`
# Rebase last N commits interactively
git rebase -i HEAD~N

# Example: Rebase last 3 commits
git rebase -i HEAD~3

# Squash commits when merging a feature branch
git checkout main
git merge --squash feature/your-feature-name

# After squashing, commit with a new message
git commit -m "feat: complete feature X with all changes"

# Force push if needed (be careful!)
git push --force-with-lease origin main
            `}
            />

            <div className="mt-4 mb-6 text-gray-300">
              <p className="mb-2">
                When using interactive rebase, you&apos;ll see these options:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <code>pick</code> - keep the commit as is
                </li>
                <li>
                  <code>reword</code> - keep the commit but edit the message
                </li>
                <li>
                  <code>edit</code> - pause for amending the commit
                </li>
                <li>
                  <code>squash</code> - combine with previous commit
                </li>
                <li>
                  <code>fixup</code> - combine with previous commit, discard
                  message
                </li>
                <li>
                  <code>drop</code> - remove the commit
                </li>
              </ul>
            </div>

            <CodeBlock
              code={`
# Example of interactive rebase file:
pick abc1234 feat: add login component
squash def5678 add password validation
squash ghi9012 fix login styles

# After saving, you'll write a new commit message for the combined commits
            `}
            />

            <h3 className="text-xl font-semibold mb-3 mt-6">
              6.2 Cherry Picking
            </h3>
            <p>Apply specific commits to different branches:</p>
            <pre className="bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto">
              <code>
                # Cherry-pick a specific commit git cherry-pick commit-hash
              </code>
            </pre>
          </section>

          {/* Best Practices Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Best Practices Summary
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Never commit directly to main branch</li>
              <li>Keep commits atomic and focused</li>
              <li>Write meaningful commit messages</li>
              <li>Pull regularly from main</li>
              <li>Review your changes before committing</li>
              <li>Use meaningful branch names</li>
              <li>Delete merged branches</li>
              <li>Document significant changes</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p>
              Following these Git workflows and best practices will help your
              team maintain a clean and efficient development process. Remember
              that good communication with your team is just as important as
              following the technical procedures. Regular code reviews, clear
              documentation, and consistent workflows will lead to successful
              team collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Branch Management Operations
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              7.1 Renaming Branches
            </h3>
            <p>How to rename local and remote branches:</p>
            <CodeBlock
              code={`
# Rename local branch
# If you are on the branch you want to rename:
git branch -m new-branch-name

# If you want to rename a different branch:
git branch -m old-branch-name new-branch-name

# Delete the old branch on remote
git push origin --delete old-branch-name

# Push the new branch to remote
git push origin -u new-branch-name

# Update upstream branch for other developers
git branch --unset-upstream  # (if needed)
git push origin -u new-branch-name
            `}
            />

            <h3 className="text-xl font-semibold mb-3 mt-6">
              7.2 Deleting Branches
            </h3>
            <p>Clean up local and remote branches:</p>
            <CodeBlock
              code={`
# List all branches (local and remote)
git branch -a

# Delete local branch (safe delete, won't delete if changes aren't merged)
git branch -d branch-name

# Force delete local branch (even if changes aren't merged)
git branch -D branch-name

# Delete remote branch
git push origin --delete branch-name

# Clean up deleted remote branches references locally
git fetch --prune

# Delete all local branches that have been merged into main
git branch --merged main | grep -v '^[ *]*main$' | xargs git branch -d

# Show all branches merged into current branch
git branch --merged

# Show all branches NOT merged into current branch
git branch --no-merged
            `}
            />

            <h3 className="text-xl font-semibold mb-3 mt-6">
              7.3 Branch Cleanup and Maintenance
            </h3>
            <CodeBlock
              code={`
# View all remote branches and their status
git remote show origin

# Remove stale remote-tracking branches
git remote prune origin

# List branches sorted by last commit date
git branch --sort=-committerdate

# Find branches containing a specific commit
git branch --contains commit-hash

# Find branches that haven't been merged to main
git branch --no-merged main

# Archive old branches (create a tag before deleting)
git tag archive/branch-name branch-name
git push origin archive/branch-name
git branch -d branch-name
            `}
            />

            <h3 className="text-xl font-semibold mb-3 mt-6">
              7.4 Branch Protection and Policies
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-semibold mb-2">
                Recommended Branch Protection Rules:
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Require pull request reviews before merging</li>
                <li>Require status checks to pass before merging</li>
                <li>Require branches to be up to date before merging</li>
                <li>Include administrators in branch protection rules</li>
                <li>Prevent force pushing to protected branches</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              7.5 Advanced Branch Operations
            </h3>
            <CodeBlock
              code={`
# Create a branch from a specific commit
git branch new-branch commit-hash

# Create and switch to a branch from a tag
git checkout -b new-branch tag-name

# Create a branch from another branch
git checkout -b new-branch existing-branch

# Track a remote branch
git checkout --track origin/branch-name

# Change tracking branch
git branch -u origin/branch-name

# Compare two branches
git diff branch1..branch2

# List all commits in branch1 that aren't in branch2
git log branch1 ^branch2

# Cherry-pick a range of commits
git cherry-pick commit1^..commit2

# Merge specific files from another branch
git checkout branch-name -- path/to/file

# Show branch hierarchy
git log --graph --oneline --all --decorate
            `}
            />

            <div className="bg-blue-900/20 p-4 rounded-lg mt-6">
              <h4 className="text-lg font-semibold mb-2">🔥 Pro Tips:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Always create feature branches from the latest main branch
                </li>
                <li>Keep branches focused on single features or fixes</li>
                <li>
                  Delete branches promptly after merging to avoid confusion
                </li>
                <li>Use meaningful, descriptive branch names</li>
                <li>
                  Regularly sync with the main branch to minimize merge
                  conflicts
                </li>
                <li>
                  Document branch naming conventions in your team&apos;s git
                  guidelines
                </li>
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default How_TO_USE_GIT;
