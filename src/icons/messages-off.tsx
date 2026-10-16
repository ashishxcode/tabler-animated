"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3"}],["path",{"d":"M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,2],"a":0.3,"dl":0.12,"st":0.08,"os":[[15.5,8.5],[8.5,15.5]]}];

export const MessagesOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessagesOffIcon.displayName = "MessagesOffIcon";
