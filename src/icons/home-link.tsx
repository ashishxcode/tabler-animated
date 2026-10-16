"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143"}],["path",{"d":"M20 21a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M20 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M15 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M21 16l-5 3l5 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3,4,5],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0,1],"o":[11.54,12],"a":-12}];

export const HomeLinkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeLinkIcon.displayName = "HomeLinkIcon";
