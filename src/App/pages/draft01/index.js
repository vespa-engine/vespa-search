import React, { useState } from 'react';
import {
  AppShell,
  useMantineTheme,
  MediaQuery,
  Aside,
  Header,
  Burger,
  Container,
} from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { Results } from 'App/pages/draft01/results';
import { HeaderLogo } from 'App/libs/layout/header-logo.js';
import { SearchInput } from 'App/pages/draft01/search-input.js';
import { Abstract } from 'App/pages/draft01/abstract.js';

const ENDPOINT = 'https://llmsearch.inference.workers.dev';

export function Draft01() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  return (
    <AppShell
      sx={(theme) => ({
        backgroundColor: theme.cr.isDarkScheme
          ? theme.cr.getSubtleBackground()
          : theme.white,
      })}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header
          sx={(theme) => ({
            backgroundColor: theme.cr.isDarkScheme
              ? theme.cr.getSubtleBackground()
              : theme.white,
          })}
          height={{ base: 50, md: 70 }}
          p="md"
        >
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <HeaderLogo />
          </div>
        </Header>
      }
      aside={
        query && (
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside
              sx={(theme) => ({
                backgroundColor: theme.cr.isDarkScheme
                  ? theme.cr.getSubtleBackground()
                  : theme.white,
              })}
              p="md"
              hiddenBreakpoint="sm"
              width={{ sm: 200, lg: 300 }}
            >
              <Abstract endpoint={ENDPOINT} query={query} />
            </Aside>
          </MediaQuery>
        )
      }
    >
      <Container>
        <SearchInput endpoint={ENDPOINT} query={query} />
        {query && <Results endpoint={ENDPOINT} query={query} />}
      </Container>
    </AppShell>
  );
}

/*
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import ReactMarkdown from 'react-markdown'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import { fetchEventSource } from "@microsoft/fetch-event-source";
import "./index.css";
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';


function search(searchInput, setSerp) {
  const url = `https://llmsearch.inference.workers.dev/search?query=${searchInput}`
  //const url = `http://127.0.0.1:8787/search?query=${searchInput}`;
  fetch(url).then(response => response.json().then(json => setSerp(json)));
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#c3c7c1',
    padding: 20,
    borderRadius:8,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  title: {
    fontSize: "1rem",
    "font-weight": "bolder"
  },
  link: {
    color: "blue",
  },
});

const CodeBlock2 = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    if (match) {
      return <SyntaxHighlighter
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>;
    } else {
        if(inline) {
          return <code className={className} {...props}>
            {children}
            </code>;
        } else {
        return <SyntaxHighlighter
          style={vscDarkPlus}
          language={"json"}
          PreTag="div"
        {...props}
        >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>;
      }
    }
  }
};


const Item = ({title,passage, path, refid}) => (
  <View style={styles.item}>
    <Text style={styles.title}>[{++refid}] {title}</Text>
    <Text style={styles.text}>{passage.substring(0,512) + " .."}</Text>
    <Text style={styles.link}>{path}</Text>
  </View>
);

function SearchAPI() {
  const [searchInput, setSearchInput] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [answer, setAnswer] = useState("");
  const [serp, setSerp] = useState("");

  const handleSearch = async () => {
      setSerp("")
      setAnswer("");
      setIsWaiting(true);
      search(searchInput, setSerp);
  	  const url = `https://llmsearch.inference.workers.dev/stream?query=${searchInput}`;
      //const url = `http://127.0.0.1:8787/stream?query=${searchInput}`;
      fetchEventSource(url, {
        onmessage: (event) => {
          setIsWaiting(false);
          if (event.data === "DONE") {

            return;
          } else {
          // Stream text
          console.log(`event '${event.data}'`);
            setAnswer((prev) => prev + event.data);
          }
        }
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleSearch();
      }
  };

	return (<div className="container">
      <div className="heading">
        <img alt="vespa logo" width="200" height="100" src="vespa-logo-full-black.svg"></img>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          className="search-input"
          placeholder="Ask a question about Vespa"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} className="search-button">
          Ask
        </button>
      </div>
      {isWaiting &&
        <div><ActivityIndicator size="large" color="#005a8e" /></div> }
      {answer &&
        <div className="result">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}
        components={CodeBlock2}>{answer.replaceAll("<br/>","\n")}</ReactMarkdown>
        </div>
      }

      {serp &&
        <SafeAreaView>
          <FlatList
            data={serp.root.children}
            renderItem={({item,index}) =>
              <Item
                refid={index}
                title={item.fields.title}
                passage={item.fields.content}
                path={item.fields.path}/>}
            keyExtractor={item => item.fields.path}
         />
        </SafeAreaView>
      }
    </div>
);
}

export default SearchAPI;

 */
