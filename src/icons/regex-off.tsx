"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5"}],["path",{"d":"M17 7.875l3 -1.687"}],["path",{"d":"M17 7.875v3.375"}],["path",{"d":"M17 7.875l-3 -1.687"}],["path",{"d":"M17 7.875l3 1.688"}],["path",{"d":"M17 4.5v3.375"}],["path",{"d":"M17 7.875l-3 1.688"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0],"o":[6.5,17.5],"st":0.07}];

export const RegexOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RegexOffIcon.displayName = "RegexOffIcon";
