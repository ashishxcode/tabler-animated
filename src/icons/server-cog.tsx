"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2"}],["path",{"d":"M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M18 14.5v1.5"}],["path",{"d":"M18 20v1.5"}],["path",{"d":"M21.032 16.25l-1.299 .75"}],["path",{"d":"M16.27 19l-1.3 .75"}],["path",{"d":"M14.97 16.25l1.3 .75"}],["path",{"d":"M19.733 19l1.3 .75"}],["path",{"d":"M7 8v.01"}],["path",{"d":"M7 16v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3,4,5,6,7,8],"o":[18,18],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,1,9,10],"o":[12,12],"a":360}];

export const ServerCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ServerCogIcon.displayName = "ServerCogIcon";
