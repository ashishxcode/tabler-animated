"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5h16"}],["path",{"d":"M16 5v14"}],["path",{"d":"M5.5 8.5c.5 -1 1.5 -1.5 2.5 -1.5c1.4 0 2.5 1 2.5 2.5s-1.1 2.5 -2.5 2.5c2 0 3.5 1.3 3.5 3.25s-1.5 3.25 -3.5 3.25c-1.2 0 -2.2 -.6 -2.8 -1.5"}],["path",{"d":"M8 12h8"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"st":0.07},{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.04}];

export const AlphabetDevanagariIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetDevanagariIcon.displayName = "AlphabetDevanagariIcon";
