"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 6h9"}],["path",{"d":"M11 12h9"}],["path",{"d":"M11 18h9"}],["path",{"d":"M4 10v-4.5a1.5 1.5 0 0 1 3 0v4.5"}],["path",{"d":"M4 8h3"}],["path",{"d":"M4 20h1.5a1.5 1.5 0 0 0 0 -3h-1.5h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const ListLettersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ListLettersIcon.displayName = "ListLettersIcon";
