"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h1.6"}],["path",{"d":"M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18 14.5v1.5"}],["path",{"d":"M18 20v1.5"}],["path",{"d":"M21.032 16.25l-1.299 .75"}],["path",{"d":"M16.27 19l-1.3 .75"}],["path",{"d":"M14.97 16.25l1.3 .75"}],["path",{"d":"M19.733 19l1.3 .75"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3,4,5,6,7,8],"o":[18,18],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,1],"o":[11.5,12],"a":360}];

export const HomeCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeCogIcon.displayName = "HomeCogIcon";
