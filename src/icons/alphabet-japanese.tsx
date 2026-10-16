"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 6h10"}],["path",{"d":"M10 4c0 6.784 .8 11.1 1.5 12.5"}],["path",{"d":"M14.25 10.75c0 3.429 -2.75 6.75 -4.812 6.75s-3.438 -1.25 -3.438 -3c0 -2.5 1.375 -4.5 4.125 -4.5s6.875 .855 6.875 4.286q 0 3.428 -2.75 4.714"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[11,6],"st":0.07},{"fx":"pop","n":[1,2],"o":[11.5,11.5],"a":0.04}];

export const AlphabetJapaneseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetJapaneseIcon.displayName = "AlphabetJapaneseIcon";
