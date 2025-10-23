.PHONY: dev shell-dev shell-build remote-dev remote-build install

# ------------------------------
# INSTALL DEPENDENCIES for both apps
# ------------------------------
install:
	@echo "Installing dependencies for remote (notion-app)..."
	(cd notion-app && yarn install)
	@echo "Installing dependencies for shell..."
	(cd shell && yarn install)

# ------------------------------
# DEV MODE: remote build + preview, shell dev (run in parallel)
# ------------------------------
dev:
	@echo "Starting remote app preview (port 5001) in background..."
	(cd notion-app && yarn build && yarn preview &)
	@sleep 2  # wait for remote preview to start
	@echo "Starting shell dev (port 3000)..."
	(cd shell && yarn dev)

# ------------------------------
# BUILD MODE: both build + preview (run remote preview in background)
# ------------------------------
build:
	@echo "Starting remote build + preview in background..."
	(cd notion-app && yarn build && yarn preview &)
	@sleep 2
	@echo "Starting shell build + preview..."
	(cd shell && yarn build && yarn preview)
