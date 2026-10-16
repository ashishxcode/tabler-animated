"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M1.499 8h3"}],["path",{"d":"M2.999 8v8"}],["path",{"d":"M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5"}],["path",{"d":"M13 16v-8l2 5l2 -5v8"}],["path",{"d":"M20 8v8h2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3,4],"o":[12.75,12],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[3,8]]}];

export const TomlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TomlIcon.displayName = "TomlIcon";
