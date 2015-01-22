.PHONY: pass fail test

TAP = ./node_modules/tape/bin/tape
MIN = ./bin/tap-difflet

pass:
	@$(TAP) test/pass.js | $(MIN)

fail:
	@$(TAP) test/fail.js | $(MIN)

test: pass fail
