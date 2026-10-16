"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14.468 10a4 4 0 1 0 -5.466 5.46"}],["path",{"d":"M2 12h1"}],["path",{"d":"M11 3v1"}],["path",{"d":"M11 20v1"}],["path",{"d":"M4.6 5.6l.7 .7"}],["path",{"d":"M17.4 5.6l-.7 .7"}],["path",{"d":"M5.3 17.7l-.7 .7"}],["path",{"d":"M15 13h5a2 2 0 1 0 0 -4"}],["path",{"d":"M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6,7,8],"o":[12,12],"d":[2.4,0],"st":0.1}];

export const SunWindIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SunWindIcon.displayName = "SunWindIcon";
