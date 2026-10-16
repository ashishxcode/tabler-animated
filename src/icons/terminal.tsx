"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 7l5 5l-5 5"}],["path",{"d":"M12 19l7 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1],"o":[12,13],"st":0.1}];

export const TerminalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TerminalIcon.displayName = "TerminalIcon";
