"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6"}],["path",{"d":"M3 8l1 0"}],["path",{"d":"M3 16l1 0"}],["path",{"d":"M8 3l0 1"}],["path",{"d":"M16 3l0 1"}],["path",{"d":"M20 8l1 0"}],["path",{"d":"M20 16l1 0"}],["path",{"d":"M8 20l0 1"}],["path",{"d":"M16 20l0 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[3.5,8],[3.5,16],[8,3.5],[16,3.5],[20.5,8],[20.5,16],[8,20.5],[16,20.5]]}];

export const ArtboardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArtboardIcon.displayName = "ArtboardIcon";
