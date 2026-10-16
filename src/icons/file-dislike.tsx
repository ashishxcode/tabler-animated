"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M6 15a1 1 0 0 1 1 -1h3.756a1 1 0 0 1 .958 .713l1.2 3c.09 .303 .133 .63 -.056 .884c-.188 .254 -.542 .403 -.858 .403h-2v2.467a1.1 1.1 0 0 1 -2.015 .61l-1.985 -3.077v-4"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-2.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[12.5,12.78],"dl":0.05,"st":0.07},{"fx":"draw","n":[0],"o":[4.5,16.5],"dl":0.2},{"fx":"pop","n":[3],"o":[12,12],"a":0.04}];

export const FileDislikeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileDislikeIcon.displayName = "FileDislikeIcon";
