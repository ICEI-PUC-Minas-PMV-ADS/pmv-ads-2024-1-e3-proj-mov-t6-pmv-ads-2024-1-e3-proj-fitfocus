package me.magi.fitcore.config;

public class StringEscapeUtil {
    public static String escapeJson(String input) {
        if (input == null) {
            return null;
        }
        return input.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t").replace("\"", "\\\"");
    }
}
