package repository

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/google/uuid"
)

func ExcludeClause(column string, ids []uuid.UUID, startIndex int) (string, []interface{}) {
	if len(ids) == 0 {
		return "", nil
	}
	placeholders := make([]string, len(ids))
	args := make([]interface{}, len(ids))
	for i, id := range ids {
		placeholders[i] = fmt.Sprintf("$%d", startIndex+i)
		args[i] = id
	}
	return " AND " + column + " NOT IN (" + strings.Join(placeholders, ",") + ")", args
}

func rebind(query string) string {
	var (
		b strings.Builder
		n int
	)
	b.Grow(len(query) + 16)
	for i := 0; i < len(query); i++ {
		c := query[i]
		if c == '?' {
			n++
			b.WriteByte('$')
			b.WriteString(strconv.Itoa(n))
			continue
		}
		b.WriteByte(c)
	}
	return b.String()
}

func excludeClauseQ(column string, ids []uuid.UUID) (string, []interface{}) {
	if len(ids) == 0 {
		return "", nil
	}
	placeholders := make([]string, len(ids))
	args := make([]interface{}, len(ids))
	for i := 0; i < len(ids); i++ {
		placeholders[i] = "?"
		args[i] = ids[i]
	}
	return " AND " + column + " NOT IN (" + strings.Join(placeholders, ",") + ")", args
}
